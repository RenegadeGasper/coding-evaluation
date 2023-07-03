class Position {
  constructor(title, employee) {
    const directReports = new Set();

    this.isFilled = () => !!employee;

    this.getTitle = () => title;

    this.setEmployee = (emp) => employee = emp;

    this.getEmployee = () => employee;

    this.addDirectReport = (position) => {
      if (!position) {
        throw new Error('position cannot be null');
      }
      directReports.add(position);
    };

    this.removePosition = (position) => directReports.delete(position);

    this.getDirectReports = () => {
      const reports = [];
      directReports.forEach(position => reports.push(position));
      return reports;
    };

    this.toString = () => {
      const emp = employee ? `: ${employee.toString()}` : '';
      return `${title}${emp.toString()}`;
    };
  }
}

export default Position;
