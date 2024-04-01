import dotenv from 'dotenv'
dotenv.config();
import { connect } from 'mongoose';
const URL = process.env.URL;

const connectToMongo = () =>{
    connect(URL , {useNewUrlParser: true})
    .then(()=>{
        console.log("Connected to Mongo Successfully")
    })
    .catch((error)=>{
        console.error("Error connecting to DB", error);
    })
}