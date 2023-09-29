import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import compression from 'compression';
import { getPost, search } from './services/index.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
app.use(compression());
app.use(cors());


app.get('/search/msg/:msg/pageNumber/:pageNumber', async (req, res) => {
    try {
        var { msg, pageNumber } = req.params;
        res.send(search(msg, parseInt(pageNumber)))
    } catch (error) {
        res.send(error)
    }
});

app.get('/post/:postId', async (req, res) => {
    try {
        var { postId } = req.params;
        res.send(getPost(parseInt(postId)))
    } catch (error) {
        res.send(error)
    }
});

app.listen(port, async () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
