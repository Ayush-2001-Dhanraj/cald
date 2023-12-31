"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var cald_exports = {};
__export(cald_exports, {
  createMonthData: () => createMonthData,
  createWeekData: () => createWeekData,
  createYearData: () => createYearData
});
module.exports = __toCommonJS(cald_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMonthData,
  createWeekData,
  createYearData
});
