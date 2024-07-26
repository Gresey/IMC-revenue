const express= require('express');
const app = express();

app.get('/api/data/:collection/:uid', async (req, res) => {
    const { collection, uid } = req.params;
    const uidInt = parseInt(uid, 10);

    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const collectionObj = database.collection(collection);

        const data = await collectionObj.findOne({ uid: uidInt });
        
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }

        const prevBillsSum = Object.values(data.prev_bills || {}).reduce((sum, value) => sum + value, 0);
        const numBills = Object.values(data.prev_bills || {}).length;
        const nextAmountPrediction = numBills > 0 ? prevBillsSum / numBills : 0;

        res.json({
            data,
            prevBillsSum,
            nextAmountPrediction
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
    }
});
