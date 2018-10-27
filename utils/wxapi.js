let nullFn = () => {
};
function IllegalAPIException(name) {
  this.message = "No Such API [" + name + "]";
  this.name = 'IllegalAPIException';
}
let services = {
  sleep: (time) => {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, time);
    })
  },
  stop: () => {
    return new Promise(function (resolve, reject) {
    })
  },
  taskSequence: () => {
    return new Promise(function (resolve, reject) {
      resolve()
    })
  }
};
export let wsAPI = new Proxy(services, {
  get: function (target, property) {
    //判断是否为services的方法
    if (property in target) {
      return target[property];
    //判断是否为wx内置的方法
    } else if (property in wx) {
      return (obj) => {
        return new Promise(function (resolve, reject) {
          obj = obj || {};
          obj.success = (...args) => {
            resolve(...args)
          };
          obj.fail = (...args) => {
            reject(...args);
          };
          obj.complete = nullFn;
          wx[property](obj);
        });
      }
    } else {
      //抛出异常
      throw new IllegalAPIException(property);
    }
  },
  
});
module.exports = {
  wsAPI: wsAPI
}
