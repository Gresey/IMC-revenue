const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);
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
function getRandomDate(year, startMonth, endMonth) {
    const start = new Date(year, startMonth - 1, 1); // startMonth is inclusive
    const end = new Date(year, endMonth, 0); // endMonth is inclusive
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
    const yearString = randomDate.getFullYear();

    return `${day} ${month} ${yearString}`;
}

function getRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const seconds = String(Math.floor(Math.random() * 60)).padStart(2, '0');

    return `${hours} ${minutes} ${seconds}`;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateUniqueId(firstName, surname) {
    if (!firstName || !surname) {
        throw new Error('First name or surname is missing');
    }
    const lowerFirstName = firstName.toLowerCase();
    const lowerSurname = surname.toLowerCase();

    const currentDate = new Date();
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');
    const millisecond = String(currentDate.getMilliseconds()).padStart(3, '0');

    return `${lowerFirstName.split(' ')[0]}_${lowerSurname.split(' ').pop()}_${minute}${second}${millisecond}`;
}

function generateDummyData() {
    const ranNumber = getRandomNumber(5, 8);
    const data = {
        uid: getRandomNumber(8273642536, 8342847503),
        name: getRandomName(),
        wardName: "ward" + String(getRandomNumber(1, 5)),
        phoneNumber: "9669384428",
        prev_bills: {},
        fees: getRandomNumber(100, 150),
        past_due: getRandomNumber(0, 95),
        penalty: getRandomNumber(0, 15)
    };
    for (let i = 1; i < Number(ranNumber); i++) {
        const dataProp = {
            date: getRandomDate(2024, 1, 6),
            time: getRandomTime(),
            fees_paid: getRandomNumber(100, 150),
            past_due: getRandomNumber(0, 95),
            penalty: getRandomNumber(0, 15)
        }
        data.prev_bills["bill" + i] = dataProp;
    }
    return data;
}
async function ru() {
    try {
        for (let i = 0; i < 19; i++) {
            const database = client.db("imc");
            const waterDep = database.collection("waterTax");
            const garbageDep = database.collection("garbageTax");
            const propertyDep = database.collection("propertyTax");
            const dataPush = generateDummyData();
            const result1 = await waterDep.insertOne(dataPush);
            const result2 = await garbageDep.insertOne(dataPush);
            const result3 = await propertyDep.insertOne(dataPush);
            console.log(`${result1.insertedCount} records1 inserted`);
            console.log(`${result2.insertedCount} records2 inserted`);
            console.log(`${result3.insertedCount} records3 inserted`);

        }
    } catch {
        await client.close();
    } finally {
        await client.close();
    }
}
async function run() {

    await ru("waterTax");





}
run();




// const year = 2024;
// const startMonth = 3; // March
// const endMonth = 5; // May

// console.log(getRandomDate(year, startMonth, endMonth));  // Example output: 15 04 2024
// console.log(getRandomTime());  // Example output: 23 45 12

