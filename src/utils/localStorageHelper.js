export default {
  set: obj => {
    const entries = Object.entries(obj);

    for (const [key, value] of entries) {
      localStorage.setItem(key, value);
    }
  },
  get: 'sdfsd',

  remove: () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => localStorage.removeItem(key));
  },
};
