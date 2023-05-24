const URL = "https://rickandmortyapi.com/api/character/"
axios = require("axios");


const getCharById = async (req, res) => {
    const { id } = req.params;
    
    try {
    const { data } = await axios.get(`${URL}${id}`)
    const { status, name, species, origin, image, gender } = data
        if(name){
            const character = {
                id,
                status,
                name,
                species,
                origin: origin?.name,
                image,
                gender
            }
            return res.status(200).json(character)
        }
        return res.status(404).send("Not fount")
        
        } catch (error) {
            return res.status(500).send(error.message)
    }
}

module.exports = getCharById;