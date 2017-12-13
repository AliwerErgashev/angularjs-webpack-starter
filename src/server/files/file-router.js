const { ok } = require('assert')
const { Router } = require('express')
const { upload } = require('../upload')
const { fileDao } = require('./file-dao')

const fileRouterFactory = fileDao => {
  const router = Router()

  router.get('/:fileId', async (req, res) => {
    const { fileId } = req.params
    try {
      const { rows: [file] } = await fileDao.select({ id: fileId })
      ok(file, 'File does not exist')
      res.end(file.content)
    } catch (error) {
      res.status(500).end({ details: error.details })
    }
  })

  router.post('/', upload.single('file'), async (req, res) => {
    const { file } = req
    try {
      const [result] = await fileDao.insert({
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
        content: file.buffer
      }, { returning: ['id'] })
      res.send(result)
    } catch (error) {
      console.error('error', error)
      res.status(500).send({ details: error.details })
    }
  })

  return router
}

exports.fileRouter = fileRouterFactory(fileDao)
