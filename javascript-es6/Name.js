class Name {
  constructor(first, last) {
    if (!first) {
      throw new Error('first name cannot be null');
    }
    if (!last) {
      throw new Error('last name cannot be null');
    }
    this.getFirst = () => first;
    this.getLast = () => last;
    this.toString = () => `${first} ${last}`;
  }
}

export default Name;
