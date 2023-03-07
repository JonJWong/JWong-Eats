// Adjust time for 24hrs
function get12HourTime(hour) {
  const hourArr = hour.split(":").map((ele) => parseInt(ele));

  // If the time includes PM, add 12 hours
  if (hour.includes("PM")) {
    // If the first digit is not 12 (noon), add 12
    if (hourArr[0] !== 12) {
      hourArr[0] += 12;
    }
  } else {
    // If the first digit is 12 (midnight), set to 0
    if (hourArr[0] === 12) {
      hourArr[0] = 0;
    }
  }
  return hourArr;
}

// Get the hours array from store open/close, adjust for 24hrs
function getTimeArray(time) {
  // Split store hours into opening, closing
  let timeSplit = time.split(" - ");
  let openingTime = timeSplit[0];
  let closingTime = timeSplit[1];

  // Check for AM/PM and adjust time accordingly for 24h
  openingTime = get12HourTime(openingTime);
  closingTime = get12HourTime(closingTime);

  return [openingTime, closingTime];
}

// Set the current time into an array comparable to the time from store hours
function getCurrentTimeArray() {
  const time = new Date();
  const [hours, minutes] = [time.getHours(), time.getMinutes()];
  return [hours, minutes];
}

// Convert 24hrs to 12hrs time
function getTimeString(time) {
  let [hours, mins] = [time[0], time[1]];
  let deno = "AM";

  if (hours > 12) {
    deno = "PM";
    hours = hours - 12;
  }

  if (hours === 12) {
    deno = "PM";
  }

  if (hours === 0) {
    hours = 12;
  }

  if (mins === 0) {
    mins = "00";
  }
  return `${hours}:${mins}${deno}`;
}

export const timeDifferencePrompt = (storeHours) => {
  // Get current time
  const currTime = getCurrentTimeArray();

  // Deconstruct store hours into workable two pieces
  const [opening, closing] = getTimeArray(storeHours);

  // TIME TO OPENING CONDITIONS
  // If the current hour is earlier than opening hour
  if (currTime[0] < opening[0]) {
    return `Opens at: ${getTimeString(opening)}`;
    // OR if the current hour is greater than closing
  } else if (currTime[0] > closing[0]) {
    return `Opens at: ${getTimeString(opening)}`;
    // OR if the current hour is equal to opening, but the minutes are smaller
  } else if (currTime[0] === opening[0] && currTime[1] < opening[1]) {
    return `Opens at: ${getTimeString(opening)}`;
    // OR if the current hour is equal to closing, but the minutes are greater
  } else if (currTime[0] === closing[0] && currTime[1] > closing[1]) {
    return `Opens at ${getTimeString(opening)}`;
  }

  // TIME TO CLOSING CONDITIONS
  // If the current hour is greater than the opening hour, less than closing
  if (currTime[0] > opening[0] && currTime[0] < closing[0]) {
    return `Open until: ${getTimeString(closing)}`;
    // OR if the current hour is the same as opening, but minutes are greater
  } else if (currTime[0] === opening[0] && currTime[1] > opening[1]) {
    return `Open until: ${getTimeString(closing)}`;
    // OR if the current hour is the same as closing, but minutes are less
  } else if (currTime[0] === closing[0] && currTime[1] < closing[1]) {
    return `Closing soon: ${getTimeString(closing)}`;
  }
};

// Helper to get price from a string "15.95", and a multiplier (quantity)
export const priceMultiple = (quantity, price) => {
  const priceFloat = parseFloat(price).toFixed(2);
  return parseFloat(quantity * priceFloat).toFixed(2);
};

// Helper to load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Helper to save current state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // put errors here
  }
};
