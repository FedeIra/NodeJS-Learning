let myData = require("./my-data.js"),
  Clock = require("./clock-es5.js"),
  cucu = new Clock();

console.log(myData.nombre, myData.email, myData.phone);

cucu.on("tictac", function () {
  cucu.theTime();
});
