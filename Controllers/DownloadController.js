class DownloadController
{
    async Upload(req, res, next)
    {
        var filenames = []
        for (const file of req.files)
        {
            filenames.push(file.originalname)
        }
        console.log(filenames)
    }
}

module.exports = new DownloadController()
