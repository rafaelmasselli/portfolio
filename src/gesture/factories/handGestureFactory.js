import Camera from "../../../lib/shared/cam.js";
import HandGestureController from "../controllers/HandGestureController.js";
import HandGestureService from "../services/HandGestureService.js";
import {
  fingerLookupIndexes,
  gestureStrings,
  knownGestures,
} from "../utils/util.js";
import HandGestureView from "../views/HandGestureView.js";

// eslint-disable-next-line no-undef
let styler = new PseudoStyler();
const camera = await Camera.init();

const factory = {
  async initialize() {
    return HandGestureController.initialize({
      camera,
      view: new HandGestureView({
        fingerLookupIndexes,
        styler,
      }),
      service: new HandGestureService({
        gestureStrings,
        knownGestures,
        fingerpose: window.fp,
        handPoseDetection: window.handPoseDetection,
        handsVersion: window.VERSION,
      }),
    });
  },
};

export default factory;
