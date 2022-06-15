import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

import testRoutes from './test/index'

app.use(cors())

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.use('/api/v1', testRoutes)

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`)
})
