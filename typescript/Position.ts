import Employee from './Employee';

class Position {
  private directReports: Set<Position> = new Set<Position>();

  constructor(private title: string, private employee?: Employee) { }

  isFilled = (): boolean => !!this.employee;

  getTitle = (): string => this.title;

  setEmployee = (employee: Employee): void => { this.employee = employee; };

  getEmployee = (): Employee | undefined => this.employee;

  addDirectReport = (position: Position): void => {
    if (!position) {
      throw new Error('position cannot be null');
    }
    this.directReports.add(position);
  };

  removePosition = (position): boolean => this.directReports.delete(position);

  getDirectReports = (): Position[] => {
    const reports: Position[] = [];
    this.directReports.forEach(position => reports.push(position));
    return reports;
  };

  toString = () => {
    const employee = this.employee ? `: ${this.employee}` : '';
    return `${this.title}${employee}`;
  };
}

export default Position;
