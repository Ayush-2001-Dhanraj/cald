export const createWeekData = (existingDate: Date) => {
  let firstDayOfWeek = new Date(existingDate);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());
  const week: Array<Date> = [firstDayOfWeek];

  for (let i = 0; i < 6; i++) {
    const newDate = new Date(
      week[i]!.getFullYear(),
      week[i]!.getMonth(),
      week[i]!.getDate() + 1
    );
    week.push(newDate);
  }
  return week;
};

export const createMonthData = (existingDate: Date) => {
  let firstDateOfWeek = new Date(existingDate);
  let temp = firstDateOfWeek.getDate() - firstDateOfWeek.getDay();
  // skew towards sunday
  firstDateOfWeek.setDate(firstDateOfWeek.getDate() - firstDateOfWeek.getDay());

  // factor to push back date
  let count = 0;
  while (temp > 0) {
    temp -= 7;
    count++;
  }

  // push back date
  firstDateOfWeek.setDate(firstDateOfWeek.getDate() - count * 7);

  const month: Array<Array<Date>> = [];

  for (let j = 0; j < 6; j++) {
    const week = createWeekData(firstDateOfWeek);

    month.push(week);
    // firstDateOfWeek is last week last date + 1
    firstDateOfWeek = new Date(
      week[6]!.getFullYear(),
      week[6]!.getMonth(),
      week[6]!.getDate() + 1
    );
  }

  return month;
};

export const createYearData = (existingDate: Date) => {
  const year: Array<Array<Array<Date>>> = [];

  for (let i = 0; i < 12; i++) {
    const firstDate = new Date(existingDate.getFullYear(), 0 + i, 1);
    const month: Array<Array<Date>> = createMonthData(firstDate);
    year.push(month);
  }
  return year;
};
