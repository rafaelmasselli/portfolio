function supportsWorkerType() {
  let supports = false;
  const tester = {
    // eslint-disable-next-line getter-return
    get type() {
      supports = true;
    },
  };

  try {
    new Worker("blob://", tester).terminate();
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return supports;
  }
}

function prepareRunChecker({ timerDelay }) {
  let lastEvent = Date.now();
  return {
    shouldRun() {
      const result = Date.now() - lastEvent > timerDelay;
      if (result) lastEvent = Date.now();

      return result;
    },
  };
}

export { supportsWorkerType, prepareRunChecker };
