
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news:arif123@cluster0.wg8wdsp.mongodb.net/news?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req ,res) {
  
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   console.log("connection established")
  const newsConnection = client.db("news").collection("news");
  if(req.method === "GET"){
    const news  = await  newsConnection.find({}).toArray()
 res.send({message:'success',status: 200,  data :  news});
  }
  if (req.method === "POST") {
    const news = req.body;
    const result = await newsCollection.insertOne(news);
    res.json(result);
  }


}
export default run;
