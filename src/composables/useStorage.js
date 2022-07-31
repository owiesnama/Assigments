import { reactive, ref, watch } from "vue";

export function useStorage(key, data = null) {
  let storedData = read();

  if (storedData) {
    data = reactive(storedData);
  } else {
    data = reactive(data);

    write();
  }

  watch(data, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (data === null || data === '') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  return data;
}