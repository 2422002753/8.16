const util = {
  /**
   * @param {*} str  type:String
   */
  queryString(str) {
    if (typeof str !== 'string') {
      throw TypeError('str is not String');
    }
    // eslint-disable-next-line no-param-reassign
    str = str.split('?')[1].split('&');
    const obj = {};
    str.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item = item.split('=');
      // eslint-disable-next-line prefer-destructuring
      obj[item[0]] = item[1];
    });
    return obj;
  },
};
export default util;
