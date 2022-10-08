const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images')
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}` + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req,file,cb)=>{
        const ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return cb(console.log(new Error('Somente imagens são permitidas! (png, jpg, jpeg, gif)')))
        }
        cb(null, true)
    },
    limits:{
        files: 1,
        fileSize: 1024*1024 //1MB
    }
}).single('imageUploadInput');


router.post('/upload',(req,res)=>{

    // Make a post request to the server through memes.js with a json with
    // name -> varchar
    // collectionId -> integer
    // isLootable -> boolean
    // isMemeRare -> boolean 

    upload(req,res,function (err){
        if (err instanceof multer.MulterError) {
            console.log('Multer Error: ', err)
            return res.status(400).json({message:err})
        } else if (err) {
            console.log('Unknow Error: ',err)
            return res.status(500)
        }
        return res.status(201).json({message:'Arquivo enviado com sucesso!'})
    })
})

module.exports = router;