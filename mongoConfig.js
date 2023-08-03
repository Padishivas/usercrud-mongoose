const { MongoClient } = require("mongodb");

const client = new MongoClient(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@padishivas.1tqvkkg.mongodb.net/`,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

const db = client.db();

const Courses = db.collection("Courses");
const Topics = db.collection("Topics");
const Subscriptions = db.collection("Subscriptions");
const Payment = db.collection("Payment");

module.exports = { Courses, Topics, Subscriptions, Payment };
