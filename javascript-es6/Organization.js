class Organization {
  constructor(root) {
    this.printOrganization = (position, prefix) => {
      let str = `${prefix}+-${position.toString()}\n`;
      for (const p of position.getDirectReports()) {
        str = str.concat(this.printOrganization(p, `${prefix}  `));
      }
      return str;
    };

    // Hire the given person as an employee in the position that has that title
    // Return the newly filled position or undefined if no position has that title
    this.hire = (person, title) => {
      // your code here
    };

    this.toString = () => this.printOrganization(root, '');
  };
}

export default Organization;
