class Employee {
  constructor(identifier, name) {
    if (!name) {
      throw new Error('name cannot be null');
    }
    this.getIdentifier = () => identifier;
    this.getName = () => name
    this.toString = () => `${name.toString()}: ${identifier}`;
  }
}

export default Employee;
