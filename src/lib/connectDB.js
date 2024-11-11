const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () =>{
    if(db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri,{
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        })
    } catch (error) {
        
    }
};