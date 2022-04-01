const Mongoose = require("mongoose");

const localDB = `mongodb://localhost:27017/role_auth`;

const connectDB = async () => {
  await Mongoose.connect('mongodb+srv://adyyatlas:deep1206@cluster0.5jghz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
