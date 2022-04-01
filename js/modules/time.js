// const displayDate = () => {
//     const dateElement = document.querySelector('.time');
//     const dt = DateTime.now();
  
//     const options = {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     };
  
//     const all = dt.toLocaleString(options);
  
//     dateElement.textContent = `${all}`;
//   };
  
//   export default displayDate;

import { DateTime } from './luxon.min.js';

const now = DateTime.now();
const today = now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export { now, today };