Date.prototype.getFullDay = function() {
  let day = this.getDate();
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + "st";
    case 2:  return day + "nd";
    case 3:  return day + "rd";
    default: return day + "th";
  }
}

const talkingCalendar = function(date) {
 let [_,year, month, day] = /(\d{4})\/(\d{1,2})\/(\d{1,2})/.exec(date);
  let timeObj = new Date(year, month - 1, day)
  return `${timeObj.toLocaleString('default', { month: 'long' })} ${timeObj.getFullDay()}, ${timeObj.getFullYear()}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));