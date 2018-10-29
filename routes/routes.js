const express = require('express');
const router = express.Router();

router.get('/offers', function(req,res,next){
	res.send('retrieving offers');
});

router.post('/add-offer', function(req,res,next){

});

module.exports = router;
