// Set Launch Date (ms)
const launchDate = new Date("August 9, 2023 12:00:00 UTC").getTime();

// Context object
const c = {
  context: {},
  values: {}, 
  times: {}
};

// Convert radians to degrees
function deg(d) {
  return (Math.PI/180)*d-(Math.PI/180)*90;
}

function render() {
  c.context.seconds.clearRect(0, 0, 200, 200);
  c.context.seconds.beginPath();
  c.context.seconds.strokeStyle = "#FFF540";
  c.context.seconds.arc(100, 100, 90, deg(0), deg(6 * (60 - c.times.seconds)));
  c.context.seconds.lineWidth = 10;
  c.context.seconds.lineCap = "round"; 
  c.context.seconds.stroke();
  
  c.context.minutes.clearRect(0, 0, 200, 200);
  c.context.minutes.beginPath();
  c.context.minutes.strokeStyle = "#C9E748";
  c.context.minutes.arc(100, 100, 90, deg(0), deg(6 * (60 - c.times.minutes)));
  c.context.minutes.lineWidth = 10;
  c.context.minutes.lineCap = "round"; 
  c.context.minutes.stroke();
  
  c.context.hours.clearRect(0, 0, 200, 200);
  c.context.hours.beginPath();
  c.context.hours.strokeStyle = "#87DF3D";
  c.context.hours.arc(100, 100, 90, deg(0), deg(15 * (24 - c.times.hours)));
  c.context.hours.lineWidth = 10;
  c.context.hours.lineCap = "round"; 
  c.context.hours.stroke();
  
  c.context.days.clearRect(0, 0, 200, 200);
  c.context.days.beginPath();
  c.context.days.strokeStyle = "#24D634";
  c.context.days.arc(100, 100, 90, deg(0), deg(365 - c.times.days));
  c.context.days.lineWidth = 10;
  c.context.days.lineCap = "round"; 
  c.context.days.stroke();
}

function init() {
  // Get 2D contexts
  c.context.seconds = document.getElementById('seconds-canvas').getContext('2d');
  c.context.minutes = document.getElementById('minutes-canvas').getContext('2d');
  c.context.hours = document.getElementById('hours-canvas').getContext('2d');
  c.context.days = document.getElementById('days-canvas').getContext('2d');
  
  // Get displayed values
  c.values.seconds = document.getElementById('seconds-value');
  c.values.minutes = document.getElementById('minutes-value');
  c.values.hours = document.getElementById('hours-value');
  c.values.days = document.getElementById('days-value');

  const dayName =  document.getElementById('days-text');
  
  setInterval(function() {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Get distance from now to launchDate
    const distance = launchDate - now;

    // Time calculations
    c.times.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    c.times.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    c.times.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    c.times.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayName.innerText = even_or_odd(c.times.days);

    c.values.days.innerText = c.times.days;
    c.values.hours.innerText = c.times.hours;
    c.values.minutes.innerText = c.times.minutes;
    c.values.seconds.innerText = c.times.seconds;
    
    render(); // Draw!
  }, 1000);
}

function even_or_odd(number) {

    console.log("День" + number);
    if (number == 1) {
        console.log("День" + number);
        return "День"
    }
    else if (number < 5) {
        console.log("Дня" + number);
        return "Дня"
    }
    else {
        console.log("Дней" + number);
        return "Дней"
    }
}

init();
