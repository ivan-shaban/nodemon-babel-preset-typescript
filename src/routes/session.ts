import {
    Request,
    Response,
    Router,
} from 'express'

export const sessionRouter = Router()
    .get('/', (req: Request, res: Response) => {
        return res.send(req.context.users[req.context.me.id])
    })
