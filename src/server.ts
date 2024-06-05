import express from 'express';
import router from './router';
import cors from 'cors';
import {protect} from "./modules/auth";
import {createNewUser, signin} from "./handlers/user";

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1',protect, router)

app.post('/users', createNewUser)
app.post('/signin', signin)



export default app;