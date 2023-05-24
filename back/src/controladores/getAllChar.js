const URL = "https://rickandmortyapi.com/api/character";

function getAllChar(req, res) {
  axios.get(URL)
    .then(({ data }) => {
      if (data.results) {
        const characters = data.results.slice(0, 100).map((ch) => {
          const character = {
            id: ch.id,
            name: ch.name,
            status: ch.status,
            species: ch.species,
            gender: ch.gender,
            origin: ch.origin?.name,
            image: ch.image,
          };
          console.log(character);
          return character;
        });

        res.status(200).json(characters);
      } else {
        res.status(500).json({ message: "Characters not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
}

module.exports = getAllChar;


//   const Character = require('../models/Character');

// const getAllChars = async (req, res) => {
//   try {
//     const characters = await Character.findAll();
//     res.status(200).json(characters);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// module.exports = getAllChars;