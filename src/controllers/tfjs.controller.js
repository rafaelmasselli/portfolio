export default class tfjsController {
  constructor() {}

  async init() {
    return console.log("Hello world!");
  }

  static async initialize(deps) {
    const controller = new tfjsController(deps);
    return controller.init();
  }
}
