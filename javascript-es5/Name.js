module.exports = function (first, last) {
  if (!first) {
    throw new Error('first name cannot be null');
  }
  if (!last) {
    throw new Error('last name cannot be null');
  }
  return {
    getFirst: function () { return first; },
    getLast: function () { return last; },
    toString: function () { return `${first} ${last}`; },
  };
};
