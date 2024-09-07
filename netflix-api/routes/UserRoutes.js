const router = require("express").Router();
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies)
router.put("/remove", removeFromLikedMovies)

module.exports = router;