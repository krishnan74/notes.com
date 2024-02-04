import clientPromise from ".";

let client;
let db;
let content;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("notes_db");
    content = await db.collection("notes");
  } catch (error) {
    throw new Error("Failed to establish connection to the database");
  }
}



export async function getAll() {
  try {
    if (!content) await init();
    const result = (await content.find({}).toArray()).map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));
    return { content: result };
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed!!!" };
  }
}


export async function getSearch(searchTerm) {
  try {
    if (!content) await init();
    
    const result = (await content.find({
      $or: [
        { question: { $regex: searchTerm, $options: "i" } }, // i for case-insensitive
        { answer: { $regex:searchTerm, $options: "i" } },
        { unitName: { $regex:searchTerm, $options: "i" } },
      ]
    }).toArray()).map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));
    
    return { content: result };
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed!!!" };
  }
}



