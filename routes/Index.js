const express = require('express')
const router = express.Router();
router.get('/',function(req, res){

    res.render('index', { title: 'Hey', message: 'Hello there!' })
    //   })
});
router.get('/about',function(req, res){

    res.render('about', { title: 'Hey', message: 'Hello Aboout' })
    //   })
});
module.exports = router
