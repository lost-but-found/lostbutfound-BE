import Item from "../models/Item";
import User from "../models/User";

const handleAllItems = async (req, res) => {
  const allItems = await Item.find();
  res.send(allItems);
};

const addMissingItem = async (req, res) => {
  const { title, desc, category } = req.body;

  const itemImg: string | undefined = req.file?.path;

  try {
    const result = await Item.create({
      title,
      description: desc,
      missing: true,
      category,
      itemImg, // Store the file path in the itemPic field
    });
    res.send({ message: "Item added!" });
    console.log(result);
  } catch (error) {
    res.status(500).send({ error });
    console.log(error);
  }
};

const addFoundItem = async (req, res) => {
  const { title, desc, category } = req.body;

  const itemImg: string | undefined = req.file?.path;

  try {
    const result = await Item.create({
      title,
      description: desc,
      missing: false,
      category,
      itemImg,
    });
    res.send({ message: "Item added!" });
    console.log(result);
  } catch (error) {
    res.send(error);
  }
};

const getItemsByUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const items = await Item.find({ user: user._id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export { handleAllItems, addMissingItem, addFoundItem, getItemsByUser };
