import express from 'express';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
 
const app = express();
const PORT = process.env.PORT || 3000;

//get file path from url of current module
const __filename = fileURLToPath(import.meta.url);
//get the dir name from the file path 
const __dirname = dirname(__filename);

//server html file from the /public dir
//force express to make sure that get the public folder as static
app.use(express.static(path.join(__dirname,'../public')));

//Middleware
app.use(express.json());

app.get("/", (request,response) => {
  response.sendFile(path.join(__dirname, 'public','index.html'));
}); 

app.use('/auth',authRoutes);

app.listen(PORT, () => { 
  console.log("Listening on Port",PORT);
}); 