const Utils = {
  formatDate: (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  },
  getMonthName: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short' });
  },
  getDayNumber: (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  },
  debounce: (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  },
  addClass: (element, className) => {
    if (element) element.classList.add(className);
  },
  removeClass: (element, className) => {
    if (element) element.classList.remove(className);
  },
  toggleClass: (element, className) => {
    if (element) element.classList.toggle(className);
  }
};