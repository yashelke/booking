let express=require("express");
let cors=require("cors");
let {MongoClient}=require("mongodb");

let app=express();
app.use(cors());


app.use(express.json());


// const url = "mongodb://0.0.0.0:27017";


const url="mongodb+srv://yashshelke446:58wSdy4XAIfZJUOx@cluster0.hlx71oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.post("/add",(request,response)=>
{
    let client=new MongoClient(url);
    client.connect();
    let db=client.db("mern");
    let collec=db.collection("bookings");

    let obj={
        name:request.body.name,
        event:request.body.event,
        time:request.body.time,
        phone:request.body.phone
    }

    collec.insertOne(obj)
    .then((result)=>response.send(result))
    .catch((error)=>response.send(error));
}
);

app.get("/get",(request,response)=>
    {
        let client=new MongoClient(url);
        client.connect();
        let db=client.db("mern");
        let collec=db.collection("bookings");
    
      
    
        collec.find().toArray()
        .then((result)=>response.send(result))
        .catch((error)=>response.send(error));
    }
    );


    




app.listen(9000,()=>{console.log("Express is Active.")});
