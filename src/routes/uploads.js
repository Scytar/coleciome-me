const { application } = require("express");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path");
const Memes = require('../database/postgres/memes');

let newFilename

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images')
    },
    filename: (req, file, cb)=>{
        newFilename = `${Date.now()}` + path.extname(file.originalname)
        cb(null, newFilename);
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


router.post('/upload/meme/:isLootable/:isRare/:collectionId',(req,res)=>{

    upload(req,res, async function (err){

        if (err instanceof multer.MulterError) {
            console.log('Multer Error: ', err)
            return res.status(400).json({message:err})
        } else if (err) {
            console.log('Unknow Error: ',err)
            return res.status(500).json(err)
        }

        if (!newFilename) {
            return res.status(400).json({message:'Nenhum arquivo foi criado'})
        } else {
            const data = {
                name:newFilename,
                collectionId:req.params.collectionId,
                isLootable:req.params.isLootable,
                isMemeRare:req.params.isRare,
            }
            console.log('data: ', data)
            const new_meme = await new Memes().create(data)
            console.log('new_meme: ',new_meme)
            return res.status(201).json({message:'Arquivo enviado com sucesso!' , data:new_meme})
        }

    })
})

module.exports = router;