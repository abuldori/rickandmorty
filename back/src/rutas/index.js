const { login, register } = require("../controladores/login")
const getCharById = require("../controladores/getCharById")
const postFav = require("../controladores/postFav")
const getAllChar = require("../controladores/getAllChar");
const deleteFav = require("../controladores/deleteFav");

const router = require("express").Router(); 

//SE PUEDE HACER ASI SE EJUTA SOLA Y RECIBE REQ Y RES
router.get("/character/:id", getCharById)
router.get("/all", getAllChar)

router.get("/login", login)
 

router.post("/register", register)


router.post("/favorite", async (req, res) => {
    // const { id, name, status, species, gender, origin, image, userId } = req.body;
    // const characterFav = await postFav(id, name, status, species, gender, origin, image, userId);
    // try {
    //   if (characterFav.error) throw Error(characterFav.error);
    //   res.status(200).json(characterFav);
    // } catch (error) {
    //   res.status(404).send(error.message);
    // }
    postFav(req, res)
  });
  

router.delete("/favorite/:id", deleteFav)

module.exports = router;