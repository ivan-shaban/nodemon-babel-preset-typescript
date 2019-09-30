import {
    Request,
    Response,
    Router,
} from 'express'
import {response as MESSAGES} from '../mocks/messages'
import uuid from 'uuid/v4'

export const messagesRouter = Router()
    .get('/', (req: Request, res: Response) => {
        return res.send(Object.values(req.context.messages))
    })
    .get('/:messageId', (req: Request, res: Response) => {
        return res.send(req.context.messages[req.params.messageId])
    })
    .post('/messages', (req: Request, res: Response) => {
        const id = uuid()
        const message = {
            id,
            text: req.body.text,
            userId: req.context.me.id,
        }
        req.context.messages[id] = message
        return res.send(message)
    })
    .delete('/:messageId', (req: Request, res: Response) => {
        const message = MESSAGES[req.params.messageId]
        delete req.context.messages[req.params.messageId]
        return res.send(message)
    })
