const { Schema, model } = require("mongoose");
const { formatJSONData } = require("./utils/helper");

const UserSchema = new Schema({
    id: String,
    username: String,
    created_at: Date,
    updated_at: Date,
});

const User = model("User", UserSchema);

const create = async ({ username }) => {
    const dates = {
        created_at: new Date(),
        updated_at: new Date(),
    };

    const userData = await User.create({ username, ...dates });
    return formatJSONData(userData);
};

const findAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers.map((user) => formatJSONData(user));
};

const updateUser = async (id, user) => {
    const updated_at = new Date();
    await User.updateOne({ _id: id }, { ...user, updated_at });
    const updatedUser = await User.findOne({ _id: id });
    return formatJSONData(updatedUser);
};

const deleteUser = async (id) => {
    return await User.deleteOne({ _id: id });
};

module.exports = {
    User,
    create,
    findAllUsers,
    updateUser,
    deleteUser,
};
