import 'dotenv/config'
import express, {Application} from 'express'
import cors from 'cors'
import {response as USERS} from './mocks/users'
import {response as MESSAGES} from './mocks/messages'
import {sessionRouter} from './routes/session'
import {usersRouter} from './routes/user'
import {messagesRouter} from './routes/message'
import {indexRouter} from './routes'

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
app.use('/', indexRouter)
app.use('/session', sessionRouter)
app.use('/users', usersRouter)
app.use('/messages', messagesRouter)

app.listen(process.env.PORT, () => {
    console.log(`>> App starts on port ${process.env.PORT}`)
});
