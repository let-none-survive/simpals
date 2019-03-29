export class LocalStorage {
  constructor(prefix = '__simpalsTestTask__') {
    this.prefix = prefix;
  }

  add(key, data) {
    try {
      window.localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(data))
    } catch (e) {
      console.log(e);
    }
  }

  remove(key) {
    try {
      window.localStorage.removeItem(`${this.prefix}${key}`);
    } catch(e) {
      console.log(e);
    }
  }

  get(key) {
    try {
      return JSON.parse(window.localStorage.getItem(`${this.prefix}${key}`));
    } catch (e) {
      console.log(e);
    }
  }
}
