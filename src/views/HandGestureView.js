export default class HandGestureView {
  #handsCanvas;
  #canvasContext;
  #fingerLookupIndexes;
  #styler;

  constructor({ fingerLookupIndexes, styler }) {
    this.#handsCanvas = document.querySelector("#hands");

    if (!this.#handsCanvas) {
      console.error('Elemento canvas com ID "hands" não encontrado.');
      return;
    }

    this.#canvasContext = this.#handsCanvas.getContext("2d");

    if (!this.#canvasContext) {
      console.error("Não foi possível obter o contexto 2D do canvas.");
      return;
    }

    this.#handsCanvas.width = globalThis.screen.availWidth;
    this.#handsCanvas.height = globalThis.screen.availHeight;
    this.#fingerLookupIndexes = fingerLookupIndexes;
    this.#styler = styler;

    // Carrega os estilos assincronamente
    setTimeout(() => styler.loadDocumentStyles(), 200);
  }
  clearCanvas() {
    if (this.#canvasContext) {
      this.#canvasContext.clearRect(
        0,
        0,
        this.#handsCanvas.width,
        this.#handsCanvas.height
      );
    }
  }

  drawResults(hands) {
    for (const { keypoints, handedness } of hands) {
      if (!keypoints) continue;

      this.#canvasContext.fillStyle =
        handedness === "Left" ? "rgb(44, 212, 103)" : "rgb(44, 212, 103)";
      this.#canvasContext.strokeStyle = "red";
      this.#canvasContext.lineWidth = 5;
      this.#canvasContext.lineJoin = "round";

      // juntas
      this.#drawJoients(keypoints);
      // dedos
      this.#drawFingersAndHoverElements(keypoints);
    }
  }

  clickOnElement(x, y) {
    const element = document.elementFromPoint(x, y);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: rect.left + x,
      clientY: rect.top + y,
    });

    element.dispatchEvent(event);
  }

  #drawJoients(keypoints) {
    for (const { x, y } of keypoints) {
      this.#canvasContext.beginPath();
      const newX = x - 2;
      const newY = y - 2;
      const radius = 10;
      const startAngle = 0;
      const endAngle = 2 * Math.PI;

      this.#canvasContext.arc(newX, newY, radius, startAngle, endAngle);
      this.#canvasContext.fill();
    }
  }
  #drawFingersAndHoverElements(keypoints) {
    const fingers = Object.keys(this.#fingerLookupIndexes);
    for (const finger of fingers) {
      const points = this.#fingerLookupIndexes[finger].map(
        (index) => keypoints[index]
      );
      const region = new Path2D();
      // [0] é a palma da mao (wrist)
      const [{ x, y }] = points;
      region.moveTo(x, y);
      for (const point of points) {
        region.lineTo(point.x, point.y);
      }
      this.#canvasContext.stroke(region);
      this.#hoverElement(finger, points);
    }
  }

  #hoverElement(finger, points) {
    if (finger !== "indexFinger") return;
    const tip = points.find((item) => item.name === "index_finger_tip");
    const element = document.elementFromPoint(tip.x, tip.y);
    if (!element) return;
    const fn = () => this.#styler.toggleStyle(element, ":hover");
    fn();

    setTimeout(() => fn(), 500);
  }

  loop(fn) {
    requestAnimationFrame(fn);
  }

  scrollPage(top) {
    scroll({
      top,
      behavior: "smooth",
    });
  }
}