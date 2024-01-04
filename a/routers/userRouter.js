const express = require("express")
const {signup} = require("../controllers/userController.js")
const {login} = require("../controllers/userController.js")
const router = express.Router()


router.post("/signup", signup)
router.post("/get", login)

module.exports = router