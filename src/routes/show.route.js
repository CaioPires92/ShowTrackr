import { Router } from 'express'
import {
  changeShowStatus,
  createShow,
  deleteShow,
  editShow,
  getShow
} from '../controllers/show.controllers.js'

const showRouter = Router()

showRouter.post('/show', createShow)
showRouter.get('/show', getShow)
showRouter.patch('/show/status/:id', changeShowStatus)
showRouter.delete('/show/:id', deleteShow)
showRouter.put('/show/:id', editShow)

export default showRouter
