import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";

const databaseUrl = process.env.MONGODB_DATABASE_URL || "";
const client = new MongoClient(databaseUrl);

client.connect().then(async (client) => {
  const db = client.db();

  const myData = await db
    .collection("movies")
    .find()
    .toArray()
    .then((result) => console.log(result))
    .then(() => client.close());

  console.log(myData);
});

client.connect().then(async (client) => {
  const db = client.db();

  const myDirector_id = await db
    .collection("directors")
    .findOne({ lastName: "Nolan" })
    .then((result) => console.log(result))
    .then(() => client.close());

  console.log(myDirector_id);
});

client.connect().then(async (client) => {
  const db = client.db();

  const movie = await db
    .collection("movies")
    .updateOne( { name: "Inception" }, { $set: { directors:  } })
    .then((result) => console.log(result))
    .then(() => client.close());
  

// db.createCollection<Movie>("movies", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["directors", "movies", "main_actors"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         title: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         directors: {
//           bsonType: "object",
//           required: ["firstName", "lastName"],
//           properties: {
//             firstName: {
//               bsonType: "string",
//               description: "must be a string and is required",
//             },
//             lastName: {
//               bsonType: "string",
//               description: "must be a string and is required",
//             },
//           },
//           movies: {
//             bsonType: "string",
//             description: "must be a string and is required",
//           },
//           main_actors: {
//             bsonType: "object",
//             required: ["firstName", "lastName"],
//             properties: {
//               firstName: {
//                 bsonType: "string",
//                 description: "must be a string and is required",
//               },
//               lastName: {
//                 bsonType: "string",
//                 description: "must be a string and is required",
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// });
