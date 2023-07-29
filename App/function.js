

/****
 * 
 * send data to ls
 */
  const sendDatals = (key , data) => {
     localStorage.setItem(key, JSON.stringify(data));
  };


/****
 * 
 * Get data from ls
 */
const getDatals = (key) => {
 if(localStorage.getItem(key)){
  return JSON.parse(localStorage.getItem(key));
 };

 return [];
};


/****
 * 
 * create alert 
 */
const createAlert = (msg , type = "danger") => {
  return `
    <p class="alert alert-${type} d-flex justify-content-between"> ${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
   </p>
  `
};

/***
 * 
 * time age function 
 * 
 */
const  timeAgoInstagram = (dateOrTimestamp) => {
  const date = typeof dateOrTimestamp === 'number' ? new Date(dateOrTimestamp) : new Date(dateOrTimestamp);
  const now = Date.now();
  const seconds = Math.floor((now - date) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const intervalCount = Math.floor(seconds / secondsInUnit);
    if (intervalCount >= 1) {
      return `${intervalCount}${unit.charAt(0)}`;
    }
  }

  return 'now';
}






