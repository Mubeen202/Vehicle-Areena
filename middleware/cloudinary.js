const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: "dwjeq9g3h",
    api_key: "582348411782131",
    api_secret: "XLGbYeRRxM4qyg54K6fHz-9HavY"
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}