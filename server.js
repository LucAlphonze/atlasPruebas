// const MongoClient = require("mongodb").MongoClient;

// const uri = "mongodb+srv://admin:admin@cluster0.xvqceg8.mongodb.net/?retryWrites=true&w=majority"

// const client = new MongoClient(uri);

// async function run() {
//     try {
//         const database = client.db('TS');
//         const timeS = database.collection('timeData')

//         const query = {
//             data: {
//                 id: "data1"
//             }
//         }
//         const timeSeries = timeS.find({});
//         await timeSeries.forEach(doc => console.log(doc));

//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir)


// const kumont = []
// class KumMember {
//     constructor(autism, name) {
//         this.autism = autism;
//         this.name = name;
//     }
// }
// function hasAutism(s) {
//     if (s.autism == true) {
//         return console.log(`${s.name} has autism`)
//     } else {
//         return console.log(`${s.name} is likely to have mental Illness`)
//     }
// }
// const Fruti = new KumMember(true, "Fruti")
// kumont.push(Fruti)
// async function kumOnAutism() { await kumont.forEach(hasAutism) }

// kumOnAutism().catch(console.dir);


