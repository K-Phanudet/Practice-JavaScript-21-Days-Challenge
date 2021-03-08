(() => {
  //1 Asynchronous
  simulateAPI = (text, timeOut) => {
    setTimeout(() => {
      console.log(text);
    }, timeOut);
  };
  simulateAPI("A", 1000);
  simulateAPI("b", 500);
  simulateAPI("D", 100);

  //2 CallBack Function
  simulateAPICallBack = (text, timeOut, CallBack) => {
    setTimeout(() => {
      console.log(text);
      CallBack && CallBack();
    }, timeOut);
  };
  simulateAPICallBack("callBack A", 1000, () => {
    simulateAPICallBack("callBack AA", 100, () => {
      simulateAPICallBack("callBack AAA", 600);
    });
  });

  //3 Promise Function
  simulateAPIPromise = (text, timeOut) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(text);
        resolve();
      }, timeOut);
    });
  };
  simulateAPIPromise("Promise A", 1000)
    .then(() => {
      return simulateAPIPromise("Promise AA", 1000);
    })
    .then(() => {
      return simulateAPIPromise("Promise AAA", 1000);
    });

  //4 Async/Await Function
  run = async () => {
    try {
      await simulateAPIPromise("Async A", 1000);
      await simulateAPIPromise("Async AA", 500);
      await simulateAPIPromise("Async AAA", 100);
    } catch (e) {
      console.error(e);
    }
  };
  run();
})();
