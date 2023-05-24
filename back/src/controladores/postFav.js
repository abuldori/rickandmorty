const { User, Favorite } = require("../DB_connection");

let myFavorites = []


 const postFav = (req, res) => {
    const character = req.body;
        myFavorites.push(character);
            return res.status(200).json(myFavorites)
}
  
  module.exports = postFav;
  

// const postFav = async (id, name, status, species, gender, origin, image, userId) => {
 
//     if ( !id || !name || !species || !gender || !image || !origin ||!status  ) {
//         throw new Error ('Faltan datos')
//     }
//     const newFav = ({
//         id, name, status, species, gender, origin, image
//        })

//         const char = await Favorite.create(newFav);

//         return char
            // if (userId) {
            //     const user = await User.findByPk(userId);
            //     if (user) {
            //         // *******************************************
            //         // ACA SE CREA LA RELACION
            //         await user.addFavorites(char);
            //       }
            //     }
            //     const favorites = await Favorite.findAll();
            //      res.status(200).json(favorites);
             // }
              
      
       
       
        

//let myFavorites = []


// const postFav = (req, res) => {
//     const character = req.body;
//         myFavorites.push(character);
//             return res.status(200).json(myFavorites)
// }

// const deleteFav = (req, res ) => {
//     const {id} = req.params;
//     //PISAMOS EL ARRAY ORIGINAL, PARA QUE REALMENTE SE CAMBIE
//     myFavorites = myFavorites.filter(fav => fav.id !== id)
//         return res.status(200).json(myFavorites)
// }

// module.exports = {
//     deleteFav,
//     postFav
// }
