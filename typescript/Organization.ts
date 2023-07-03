import Position from './Position';
import Name from './Name';

abstract class Organization {
  private root: Position;

  constructor() {
    this.root = this.createOrganization();
  }

  protected abstract createOrganization(): Position;

  printOrganization = (position: Position, prefix: string): string => {
    let str = `${prefix}+-${position}\n`;
    for (const p of position.getDirectReports()) {
      str = str.concat(this.printOrganization(p, `${prefix}  `));
    }
    return str;
  };

  // Hire the given person as an employee in the position that has that title
  // Return the newly filled position or undefined if no position has that title
  hire(person: Name, title: string): Position | undefined {
    // your code here
    return undefined
  }

  toString = () => this.printOrganization(this.root, '');
}

export default Organization;
