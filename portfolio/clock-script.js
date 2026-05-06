// Timezone offsets from UTC (in hours)
const timezones = {
  UTC: 0,
  EST: -5,
  CST: -6,
  MST: -7,
  PST: -8,
  GMT: 0,
  CET: 1,
  EET: 2,
  IST: 5.5,
  JST: 9,
  AEST: 10,
  NZST: 12
};

// Timezone full names
const timezoneNames = {
  UTC: 'Coordinated Universal Time',
  EST: 'Eastern Standard Time',
  CST: 'Central Standard Time',
  MST: 'Mountain Standard Time',
  PST: 'Pacific Standard Time',
  GMT: 'Greenwich Mean Time',
  CET: 'Central European Time',
  EET: 'Eastern European Time',
  IST: 'India Standard Time',
  JST: 'Japan Standard Time',
  AEST: 'Australian Eastern Standard Time',
  NZST: 'New Zealand Standard Time'
};

// Function to get current time in a specific timezone
function getTimeInTimezone(offset) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const tzTime = new Date(utc + 3600000 * offset);
  return tzTime;
}

// Function to format time as HH:MM:SS
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Function to calculate hand rotation
function calculateRotation(date, handType) {
  let rotation;
  
  if (handType === 'hour') {
    rotation = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;
  } else if (handType === 'minute') {
    rotation = date.getMinutes() * 6 + date.getSeconds() * 0.1;
  } else if (handType === 'second') {
    rotation = date.getSeconds() * 6;
  }
  
  return rotation;
}

// Function to update a specific clock
function updateClock(timezone, offset) {
  const tzTime = getTimeInTimezone(offset);
  const timeString = formatTime(tzTime);
  
  // Update digital time
  const digitalTimeElement = document.getElementById(`${timezone.toLowerCase()}-time`);
  if (digitalTimeElement) {
    digitalTimeElement.textContent = timeString;
  }
  
  // Update analog clock hands
  const hourHand = document.getElementById(`${timezone.toLowerCase()}-hour`);
  const minuteHand = document.getElementById(`${timezone.toLowerCase()}-minute`);
  const secondHand = document.getElementById(`${timezone.toLowerCase()}-second`);
  
  if (hourHand) {
    hourHand.style.transform = `rotate(${calculateRotation(tzTime, 'hour')}deg)`;
  }
  if (minuteHand) {
    minuteHand.style.transform = `rotate(${calculateRotation(tzTime, 'minute')}deg)`;
  }
  if (secondHand) {
    secondHand.style.transform = `rotate(${calculateRotation(tzTime, 'second')}deg)`;
  }
}

// Function to update all clocks
function updateAllClocks() {
  for (const [timezone, offset] of Object.entries(timezones)) {
    if (['UTC', 'EST', 'CST', 'PST', 'GMT', 'CET', 'IST', 'JST'].includes(timezone)) {
      updateClock(timezone, offset);
    }
  }
  
  // Update main display
  updateMainClock();
}

// Function to update main clock display
function updateMainClock() {
  const timezoneSelect = document.getElementById('timezoneSelect');
  const selectedTimezone = timezoneSelect.value;
  const offset = timezones[selectedTimezone];
  
  const tzTime = getTimeInTimezone(offset);
  const timeString = formatTime(tzTime);
  
  document.getElementById('mainTime').textContent = timeString;
  document.getElementById('mainTimezone').textContent = selectedTimezone;
}

// Event listener for timezone selector
document.getElementById('timezoneSelect').addEventListener('change', function() {
  updateMainClock();
});

// Update clocks every second
setInterval(updateAllClocks, 1000);

// Initial update
updateAllClocks();