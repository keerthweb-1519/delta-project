const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview , isLoggedIn } =require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
const review = require("../models/reviews.js");

//review
//post route
router.post("/" , isLoggedIn ,validateReview , wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId" , isLoggedIn , wrapAsync(reviewController.destroyReview));

module.exports = router;