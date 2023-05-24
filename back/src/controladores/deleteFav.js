const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
  const id = req.params.id;

  try {
    await Favorite.destroy({ where: { id } });
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = deleteFav;
