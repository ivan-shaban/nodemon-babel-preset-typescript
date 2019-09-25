import 'dotenv/config'
import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import {response as USERS} from "./mocks/users";
import {response as MESSAGES} from "./mocks/messages";
import uuid from 'uuid/v4';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    req.context = {
        messages: MESSAGES,
        users: USERS,
        me: USERS[1],
    };
    next();
});

app.get('/session', (req: Request, res: Response) => {
    return res.send(req.context.users[req.context.me.id]);
});

app.get('/users', (req: Request, res: Response) => {
    return res.send(Object.values(req.context.users));
});
app.get('/users/:userId', (req: Request, res: Response) => {
    return res.send(req.context.users[req.params.userId]);
});
app.get('/messages', (req: Request, res: Response) => {
    return res.send(Object.values(req.context.messages));
});
app.get('/messages/:messageId', (req: Request, res: Response) => {
    return res.send(req.context.messages[req.params.messageId]);
});
app.post('/messages', (req: Request, res: Response) => {
    const id = uuid();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    };
    req.context.messages[id] = message;
    return res.send(message);
});
app.delete('/messages/:messageId', (req: Request, res: Response) => {
    const message = MESSAGES[req.params.messageId];
    delete req.context.messages[req.params.messageId];
    return res.send(message);
});

app.listen(process.env.PORT, () => {
    console.log(`>> App starts on port ${process.env.PORT}`)
});
