export const filterObj = (obj = {}, filterKeysArr = []) => {
  let res = {};
  for (const key in obj) {
    if (!filterKeysArr.includes(key)) {
      res[key] = obj[key];
    }
  }
  return res;
};
