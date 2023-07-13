import express from 'express'
import cors from 'cors'
import showRouter from './routes/show.route.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(showRouter)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
