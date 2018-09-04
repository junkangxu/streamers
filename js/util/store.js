const Store = require('electron-store');
const store = new Store();

function getValue(key) {
  return store.get(key);
}

function setValue(key, value) {
  store.set(key, value);
}

function getLastUpdatedTime() {
  return getValue(LAST_UPDATED_TIME);
}

function setLastUpdatedTime(value) {
  setValue(LAST_UPDATED_TIME, value);
}