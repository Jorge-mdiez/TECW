var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });
const postController = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

module.exports = router;

//GET author page
router.get('/author', (req,res,next) => 
  {res.render('author');});

//GET posts page
router.get('/posts',postController.index)

//autoload
router.param('postId', postController.load);


//GET post/attachment
router.get('/posts/:postId(\\d+)/attachment', postController.attachment);

//Ver post

router.get('/posts/:postId(\\d+)', postController.show);

//creación y actualización de posts
router.get('/posts/new', postController.new);

router.post('/posts', upload.single('image'), postController.create);

router.get('/posts/:postId(\\d+)/edit',  postController.edit);

router.put("/posts/:postId(\\d+)", upload.single('image'), postController.update)

//borrar posts
router.delete('/posts/:postId(\\d+)',    postController.destroy);

module.exports = router;