const express = require("express");
const router = express.Router();
const {
  registerUser,
  userDetails,
  userLogin,
  userDetailsByMobile
} = require("../controllers/user");

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/user-details/:_id").get(userDetails);
router.route("/user-by-mobile/:mobile").get(userDetailsByMobile);


module.exports = router;
