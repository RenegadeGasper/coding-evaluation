class Name {
  constructor(private readonly first: string, private readonly last: string) { }

  toString = () => `${this.first} ${this.last}`;
}

export default Name;
