const express = require('express')
const uploader = require('../Services/UploadHelperService')
const DownloadController = require('../Controllers/DownloadController')

const router = express()

router.post('/file', uploader.array('files', 3), DownloadController.Upload)



module.exports = router
