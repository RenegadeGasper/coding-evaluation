module.exports = function (identifier, name) {
  if (!name) {
    throw new Error('name cannot be null');
  }
  return {
    getIdentifier: function () { return identifier; },
    getName: function () { return name; },
    toString: function () {
      return `${name.toString()}: ${identifier}`;
    },
  };
};
