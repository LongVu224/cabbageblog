let express = require('express'),
    multer = require('multer'),
    moment= require('moment') 
    mongoose = require('mongoose'),
    { v4: uuidV4 } = require('uuid'),
    AWS = require('aws-sdk'),
    fs = require('fs'),
    { MulterAzureStorage  } = require('multer-azure-blob-storage'),
    router = express.Router();
const config = require("../config/config");

const resolveBlobName = (req, file) => {
    return new Promise((resolve, reject) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        const blobName = uuidV4() + '-' + fileName;
        resolve(blobName);
    });
};

const resolveMetadata = (req, file) => {
    return new Promise((resolve, reject) => {
        const metadata = {fieldName: file.fieldname};
        resolve(metadata);
    });
};

const connectionString = `DefaultEndpointsProtocol=https;AccountName=${config.storageName};AccountKey=${config.storageKey};EndpointSuffix=core.windows.net`

const azureStorage = new MulterAzureStorage({
    connectionString: connectionString,
    accessKey: config.storageKey,
    accountName: config.storageName,
    containerName: 'images',
    blobName: resolveBlobName,
    metadata: resolveMetadata,
});

const upload = multer({
    storage: azureStorage
});

// Blog model
let Blog = require('../models/Blog');

router.post('/', upload.array('blogImg', 10), (req, res, next) => {
    console.log(req)
    const url = req.protocol + '://' + req.get('host')
    const curDate = moment().format('MMMM Do YYYY, h:mm:ss a')
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        tag: req.body.tag,
        text: req.body.text,
        blogImg: req.files.map(file => file.blobName),
        date: curDate,
    });
    blog.save().then(result => {
        res.status(201).json({
            message: "Blog created successfully!",
            blogCreated: {
                _id: result._id,
                blogImg: result.blogImg,
                title: result.title,
                tag: result.tag,
                text: result.text,
                date: result.date
            }
        })
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        });
    })
})

router.get("/", (req, res) => {
    Blog.find().then(data => {
        res.status(200).json({
            blogs: data
        });
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        })
    });
});

router.get("/:id", (req, res) => {
    Blog.findById(req.params.id).then(data => {
        res.status(200).json({
            blog: data
        })
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        })
    });;
});

module.exports = router;