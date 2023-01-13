const Sequelize = require("sequelize");

const sequelize = new Sequelize("all-india", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticte()
  .then(() => console.log("MySQL Database Connected!"))
  .catch((err) => console.log(err));
