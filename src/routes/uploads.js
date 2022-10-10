const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Memes = require('../database/postgres/memes');
const Collections = require('../database/postgres/collections');

let newFilename;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/images');
    },
    filename: (req, file, cb) => {
        newFilename = `${Date.now()}` + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (
            ext !== '.png' &&
            ext !== '.jpg' &&
            ext !== '.gif' &&
            ext !== '.jpeg' &&
            ext !== '.webp'
        ) {
            return cb(
                console.log(
                    new Error(
                        'Somente imagens de até 1MB são permitidas! (png, jpg, jpeg, gif)'
                    )
                )
            );
        }
        cb(null, true);
    },
    limits: {
        files: 1,
        fileSize: 10 * 1024 * 1024 //1MB
    }
}).single('imageUploadInput');

router.post('/upload/meme/:isLootable/:isRare/:collectionId', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.log('Multer Error: ', err);
            return res.status(400).json({ message: err });
        } else if (err) {
            console.log('Unknow Error: ', err);
            return res.status(500).json(err);
        }

        if (!newFilename) {
            return res
                .status(400)
                .json({ message: 'Nenhum arquivo foi criado' });
        } else {
            const data = {
                name: newFilename,
                collectionId: req.params.collectionId,
                isLootable: req.params.isLootable,
                isMemeRare: req.params.isRare
            };
            const new_meme = await new Memes().create(data);
            return res
                .status(201)
                .json({
                    message: 'Arquivo enviado com sucesso!',
                    data: new_meme
                });
        }
    });
});

router.post('/upload/collection/:collectionName', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.log('Multer Error: ', err);
            return res.status(400).json({ message: err });
        } else if (err) {
            console.log('Unknow Error: ', err);
            return res.status(500).json(err);
        }

        if (!newFilename) {
            return res
                .status(400)
                .json({ message: 'Nenhum arquivo foi criado' });
        } else {
            const collection_data = {
                file_name: newFilename,
                collectionName: req.params.collectionName
            };
            const new_collection = await new Collections().create(
                collection_data
            );
            return res
                .status(201)
                .json({
                    message: 'Arquivo enviado com sucesso!',
                    data: new_collection
                });
        }
    });
});

module.exports = router;
