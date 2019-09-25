import {
    Request,
    Response,
    Router,
} from 'express'

export const usersRouter = Router()
    .get('/', (req: Request, res: Response) => {
        return res.send(Object.values(req.context.users))
    })
    .get('/:userId', (req: Request, res: Response) => {
        return res.send(req.context.users[req.params.userId])
    })
