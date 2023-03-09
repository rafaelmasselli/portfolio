export default class Cam {
  constructor() {
    this.video = document.createElement("video");
  }

  static async init() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        `Browser API navigator.mediaDevices.getUserMedia not available`
      );
    }

    const videoConfig = {
      audio: false,
      video: {
        width: globalThis.screen.availWidth,
        height: globalThis.screen.availHeight,
        frameRate: {
          ideal: 60,
        },
      },
    };

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig);
    const camera = new Cam();
    camera.video.srcObject = stream;

    camera.video.height = 500;
    camera.video.width = 500;
    document.body.append(camera.video);

    await new Promise((response) => {
      camera.video.onloadeddata = () => {
        response(camera.video);
      };
    });

    camera.video.play();

    return camera;
  }
}
