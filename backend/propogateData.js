const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://dakshkitukale03:nj1zPYDun6O5DuFc@cluster0.rcctojz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const firstNames = [
    "Amit", "Raj", "Priya", "Sneha", "Vijay", "Anjali", "Rahul", "Sunita", "Arjun", "Meera",
    "Rakesh", "Sita", "Mohan", "Geeta", "Kiran", "Suresh", "Lata", "Ravi", "Pooja", "Kavita"
];
const surnames = [
    "Sharma", "Verma", "Gupta", "Kumar", "Singh", "Patel", "Reddy", "Naidu", "Rao", "Das",
    "Chopra", "Malhotra", "Agarwal", "Joshi", "Pandey", "Saxena", "Mehta", "Iyer", "Kulkarni", "Desai"
];

function getRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    return `${firstName} ${surname}`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateDummyData() {
    const ranNumber = getRandomNumber(5, 8);
    data = {
        name: getRandomName(),
        prev_bills: {},
        fees: getRandomNumber(100, 150),
        past_due: getRandomNumber(0, 95),
        penalty: getRandomNumber(0, 15)
    };
    for (let i = 1; i < Number(ranNumber); i++) {
        data.prev_bills["bill" + i] = getRandomNumber(150, 250);
    }
    return data;
}
async function ru(collectionname) {
    try {
        const database = client.db("sample_mflix");
        const waterDep = database.collection(collectionname);
        const data = [];
        for (let i = 0; i < 25; i++) {
            data.push(generateDummyData());
        }

        const result = await waterDep.insertMany(data);
        console.log(`${result.insertedCount} records inserted`);
    } finally {
        await client.close();
    }
}
async function run() {
    await ru("waterTaxReceipts");
    await ru("propertyTaxReceipts");
    await ru("garbageTaxReceipts");
}
run();

