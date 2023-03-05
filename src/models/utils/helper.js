const formatJSONData = (data) => {
    const obj_d = data.toJSON();
    obj_d["id"] = obj_d._id.toString();
    delete obj_d._id;
    delete obj_d.__v;
    return obj_d;
};

module.exports = {
    formatJSONData,
};
