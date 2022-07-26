import  express from 'express'
import cors from "cors";
import './config/connect.js'
import userRoutes from "./routes/userRoutes.js";

const app = express()

app.use(
    express.urlencoded({
      extended: false,
    })
  );
  
app.use(express.json());

app.use(cors())

app.use(userRoutes)


export default app