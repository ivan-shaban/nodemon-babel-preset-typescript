import {Router} from 'express'

export const indexRouter = Router()
    .get('*', (req, res, next) => {
        next()
    })
