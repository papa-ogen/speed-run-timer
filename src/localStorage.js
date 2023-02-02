export const saveTime = (time) => {
  localStorage.setItem("time", time);
};

export const getTime = () => {
  return localStorage.getItem("time");
};

export const clearTime = () => {
  localStorage.removeItem("time");
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const fetchTime = () => {
  return Number(getTime());
};

export const getRecordTime = () => {
  return localStorage.getItem("recordTime");
};

export const saveRecordTime = (time) => {
  localStorage.setItem("recordTime", time);
};
