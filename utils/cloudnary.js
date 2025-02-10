const cloudinary = require('cloudinary').v2;
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudnary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        console.log(localFilePath);

        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "profileImages",
            resource_type: "auto",
        })
        
        //if file uploaded then delete local file

        fs.unlinkSync(localFilePath)
        
        return response
        } catch (error) {
        fs.unlinkSync(localFilePath)
        console.log("mesage", error.message);
        console.log(error);
        return null
    }
}



const deleteOnCloudnary = async (imageName) => {
    try {
        if(!imageName) return null
        //delete image from cloudnary also delete from cdn
        const response = await cloudinary.uploader.destroy(`${imageName}`, { invalidate: true })
        console.log(response);
        
        return response
        } catch (error) {
        console.log("mesage", error.message);
        console.log(error);
        return null
    }
}
module.exports = {
    uploadOnCloudnary,
    deleteOnCloudnary
}