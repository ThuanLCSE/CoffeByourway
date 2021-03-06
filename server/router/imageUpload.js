var multer = require('multer');
var fs = require('fs');
var upload = multer({ dest: 'upload/'});

var storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) { 
    cb(null,  Date.now()+ '.jpg')
  }
});
var uploading = multer({ storage: storage }).single('picture');

module.exports = function(app){
	var imageCtrler = require('../controller/image.ctrl'); 
	app.get('/api/upload', imageCtrler.imageForm); 
	app.post('/api/upload64', imageCtrler.uploadImage64Encode);
	app.post('/api/upload', uploading, imageCtrler.uploadImage);
}
