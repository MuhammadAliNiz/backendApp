const multer = require('multer');
const { v4:uuidv4 } = require('uuid');



// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/uploads/'); // Save files in the "public/uploads" folder
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename
  },
});

const multerUpload = multer({ storage });

module.exports = multerUpload;
