class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.state = {
      iconSrc: "app/assets/icon__navbar.png",
      iconAlt: "icon da navbar",
    };

    this.render();
  }

  connectedCallback() {
    setTimeout(() => {
      this.setState({
        iconSrc: "app/assets/icon__navbar.png",
        iconAlt: "icon da navbar",
      });
    }, 3000);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          width: 100%;
          height: 50px;
          background: rgba(50, 50, 50, 0.7);
          backdrop-filter: blur(10px);
        }

        .navbar div{
          margin: 0 50px;
        }

        .navbar__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav__links ul {
          display: flex;
          justify-content: center;
          align-content: center;
        }
        .nav__links li{
          cursor: pointer;
          list-style-type: none;
          margin: 12px;
          color: #DEDEDE;
          font-family: Manrope;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.5px;
        }

        .nav__links li:hover{
          color: black;
        }

        .nav__links a{
          text-decoration-color: none;
        }

      </style>

      <header class="navbar navbar__container">
        <div>
          <img src="${this.state.iconSrc}" alt="${this.state.iconAlt}" />
        </div>
        <div class="nav__links" >
          <ul>
            <a href="/" onclick="route()">
              <li>Home</li>
            </a>
            <a href="/work" onclick="route()">
              <li>Work</li>
            </a>
            <a href="/contact" onclick="route()">  
              <li>Contact</li>  
            </a>
          </ul>
        </div>
      </header>
    `;
  }
}

customElements.define("nav-bar", Navbar);
