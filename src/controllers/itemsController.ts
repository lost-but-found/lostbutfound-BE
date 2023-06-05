const Item = require("models/Item");

const handleAllItems = async (req, res) => {
  const allItems = await Item.find();
  res.send(allItems);
};

const addMissingItem = async (req, res) => {
  const { title, desc, missing } = req.body;

  try {
    const result = Item.create({
      title,
      description: desc,
      missing: true,
    });
    res.send({ message: "Item added!" });
    console.log(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { handleAllItems, addMissingItem };
