module.exports = function (title, employee) {
  const directReports = new Set();

  return {
    isFilled: function () {
      return !!employee;
    },

    getTitle: function () { return title; },

    setEmployee: function (emp) { employee = emp; },

    getEmployee: function () { return employee; },

    addDirectReport: function (position) {
      if (!position) {
        throw new Error('position cannot be null');
      }
      directReports.add(position);
    },

    removePosition: function (position) {
      return directReports.delete(position);
    },

    getDirectReports: function () {
      const reports = [];
      directReports.forEach(function (position) { reports.push(position); });
      return reports;
    },

    toString: function () {
      const emp = employee ? `: ${employee.toString()}` : '';
      return `${title}${emp}`;
    }
  };
};
