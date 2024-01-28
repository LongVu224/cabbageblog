let express = require('express'),
    multer = require('multer'),
    moment= require('moment') 
    mongoose = require('mongoose'),
    { v4: uuidV4 } = require('uuid'),
    AWS = require('aws-sdk'),
    fs = require('fs'),
    multerS3 = require('multer-s3'),
    router = express.Router();
const config = require("../config/config");

const s3 = new AWS.S3({
    accessKeyId: config.awsId,
    secretAccessKey: config.awsSecret
});

const BUCKET_NAME = 'cabbage-static';

/*local storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidV4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/jfif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg and .jfif format allowed!'));
        }
    }
}); */

const uploadS3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidV4() + '-' + fileName)
      }
    })
  })

// Blog model
let Blog = require('../models/Blog');

router.post('/', uploadS3.array('blogImg', 10), (req, res, next) => {
    console.log(req)
    const url = req.protocol + '://' + req.get('host')
    const curDate = moment().format('MMMM Do YYYY, h:mm:ss a')
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        tag: req.body.tag,
        text: req.body.text,
        blogImg: req.files.map(file => file.location),
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