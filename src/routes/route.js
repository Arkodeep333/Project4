const express = require('express');

const router = express.Router();

const usercontroller=require("../controllers/usercontroller")
const bookcontroller=require("../controllers/bookcontroller")
const Reviewcontroller=require("../controllers/Reviewcontroller")
 const Middleware=require("../middleware/Authentication")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//USER API
router.post('/User',usercontroller.registerUser)
 router.post('/login',usercontroller.login)


 //BOOK API
 
router.post('/books',Middleware.Auth,bookcontroller.createbooks) //authorisation

router.get('/books',Middleware.Auth,bookcontroller.getbooks)
 router.put('/books/:bookId',Middleware.Auth,bookcontroller.update ) //authorisation
 router.get('/books/:bookId',Middleware.Auth,bookcontroller.getBookWithReview )

  router.delete('/books/:bookId',Middleware.Auth,bookcontroller.deletebookbyID) //authorisation
//router.delete('/books/:bookId',bookcontroller.deletebookbyID) 

 //Reiew API 
 router.post('/books/:bookId/review',Reviewcontroller.bookreview)
router.put('/books/:bookId/review/:reviewId',Reviewcontroller.updateReviews)
 router.delete('/books/:bookId/review/:reviewId',Reviewcontroller.deleteReviewOfBook )








module.exports = router;