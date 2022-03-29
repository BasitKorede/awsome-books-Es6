const displayDate = () => {
    const dateElement = document.querySelector('.time');
    const dt = DateTime.now();
  
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    const all = dt.toLocaleString(options);
  
    dateElement.textContent = `${all}`;
  };
  
  export default displayDate;