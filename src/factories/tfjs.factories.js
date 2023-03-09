import tfjsController from "./controller/tfjs.controller.js";
import tfjsService from "./services/tfjs.service.js";
import tfjsView from "./views/tfjs.view.js";
import Cam from "../../lib/shared/cam.js";

const camera = await Cam.init();

const factory = {
  async initialize() {
    return tfjsController.initialize({});
  },
};

export { factory };
