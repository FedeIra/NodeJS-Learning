//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

var Clock = (function () {
  var EventEmitter = require("events").EventEmitter,
    inherits = require("util").inherits;

  var Clock = function () {
    var self = this;

    setInterval(function () {
      //console.log('hola')
      self.emit("tictac");
    }, 1000);
  };

  inherits(Clock, EventEmitter);

  Clock.prototype.theTime = function () {
    var date = new Date(),
      hrs = addZero(date.getHours()),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      msg = hrs + ":" + min + ":" + sec;

    function addZero(num) {
      return num < 10 ? "0" + num : num;
    }

    console.log(msg);
  };
  return Clock;
})();

module.exports = Clock;
