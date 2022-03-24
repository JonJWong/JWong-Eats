export const addZero = (num) => {
  if (num % 1 === 0) {
    return `${num}` + `.0`
  }
  return num
}

const parseHours = (time) => {
  // split store hours into opening, closing
  let timeSplit = time.split(" - ");
  let openingHour = timeSplit[0];
  let closingHour = timeSplit[1];

  // check for AM/PM and adjust time accordingly for 24h
  openingHour = checkPM(openingHour);
  closingHour = checkPM(closingHour);

  return [openingHour, closingHour]
}

function checkPM(hour) {
  // if the time includes PM, add 12 hours
  if (hour.includes("PM")) {
    hour = hour.split(":").map(ele => parseInt(ele));

    // if the first digit is not 12 (noon), add 12
    if (hour[0] !== 12) {
      hour[0] += 12;
    }
  } else {
    hour = hour.split(":").map(ele => parseInt(ele));

    // if the first digit is 12 (midnight), set to 0
    if (hour[0] === 12) hour[0] = 0;
  }
  return hour
}

function currentTimeArray() {
  const time = new Date();
  const [hours, minutes] = [time.getHours(), time.getMinutes()];
  return [hours, minutes]
}

const HOURS = parseHours("12:01AM - 11:59PM");
const CURRENT_TIME = currentTimeArray();