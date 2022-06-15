import { Router } from 'express'
import expressAsyncHandler from 'express-async-handler'

const router = Router()

router.get('/test', (req, res) => {
  res.send({ test: true })
})

router.get(
  '/test-error',
  expressAsyncHandler((req, res) => {
    throw new Error('Test error')
  })
)

export default router
