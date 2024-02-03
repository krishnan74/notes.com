import { MongoClient } from "mongodb";

const uri =process.env.MONGODB_URI;
const options = {};

if (!uri) {
    throw new Error("MongoDB URI is not provided. Make sure to set the 'uri' variable.");
}

let client = new MongoClient(uri, options);
let clientPromise;

if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;
