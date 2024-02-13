#!/usr/bin/node
exports.converter = function (base) {
  exports.converter.internal = function (number) {
    if (number >= base) {
      exports.converter.internal(number / base);
    }
    process.stdout.write(Math.floor(number % base).toString());
  };
};
