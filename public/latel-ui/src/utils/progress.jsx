import NProgress from "nprogress";

function start() {
  if (!NProgress.isStarted()) {
    NProgress.start();
  } else {
    NProgress.set(0.09);
  }
}

function done() {
  if (NProgress.isStarted()) {
    NProgress.done();
  }
}

export default {
  start,
  done,
};
