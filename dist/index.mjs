// index.ts
var createWeekData = (existingDate) => {
  let firstDayOfWeek = new Date(existingDate);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());
  const week = [firstDayOfWeek];
  for (let i = 0; i < 6; i++) {
    const newDate = new Date(
      week[i].getFullYear(),
      week[i].getMonth(),
      week[i].getDate() + 1
    );
    week.push(newDate);
  }
  return week;
};
var createMonthData = (existingDate) => {
  let firstDateOfWeek = new Date(existingDate);
  let temp = firstDateOfWeek.getDate() - firstDateOfWeek.getDay();
  firstDateOfWeek.setDate(firstDateOfWeek.getDate() - firstDateOfWeek.getDay());
  let count = 0;
  while (temp > 0) {
    temp -= 7;
    count++;
  }
  firstDateOfWeek.setDate(firstDateOfWeek.getDate() - count * 7);
  const month = [];
  for (let j = 0; j < 6; j++) {
    const week = createWeekData(firstDateOfWeek);
    month.push(week);
    firstDateOfWeek = new Date(
      week[6].getFullYear(),
      week[6].getMonth(),
      week[6].getDate() + 1
    );
  }
  return month;
};
var createYearData = (existingDate) => {
  const year = [];
  for (let i = 0; i < 12; i++) {
    const firstDate = new Date(existingDate.getFullYear(), 0 + i, 1);
    const month = createMonthData(firstDate);
    year.push(month);
  }
  return year;
};
export {
  createMonthData,
  createWeekData,
  createYearData
};
