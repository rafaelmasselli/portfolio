class navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const header = document.createElement("header");
    header.setAttribute("class", "navbar navbar__container");

    const styleHeader = document.createElement("style");
    styleHeader.textContent = `
    .navbar {
          width: 100%;
          height: 50px;
        
          background: rgba(50, 50, 50, 0.7);
          backdrop-filter: blur(10px);
        }

        .navbar__container {
          display: flex;
          justify-content: center;
          align-items: center;
        
          flex-direction: space-between;
        }
    `;

    shadow.appendChild(styleHeader);
    shadow.appendChild(header);
  }
}

customElements.define("nav-bar", navbar);
