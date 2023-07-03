module.exports = function (root) {
  return {
    getRoot: function () { return root; },

    printOrganization: function (position, prefix) {
      let str = `${prefix}+-${position.toString()}\n`;
      for (const p of position.getDirectReports()) {
        str = str.concat(this.printOrganization(p, `${prefix}  `));
      }
      return str;
    },
    // Hire the given person as an employee in the position that has that title
    // Return the newly filled position or undefined if no position has that title
    hire: function (person, title) {
      // your code here
    },

    toString: function () {
      return this.printOrganization(root, '');
    }
  };
};
