class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.state = {
      iconSrc: "./",
      iconAlt: "Descrição da imagem",
    };

    this.render();
  }

  connectedCallback() {
    // Exemplo de atualização do estado após algum evento
    setTimeout(() => {
      this.setState({
        iconSrc: "caminho/para/outra/imagem.jpg",
        iconAlt: "Nova descrição da imagem",
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

        .navbar__container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style>
      <header class="navbar navbar__container">
        <div>
          <img src="${this.state.iconSrc}" alt="${this.state.iconAlt}" />
        </div>
        <div>
          <ul>
            <li>Item de menu</li>
          </ul>
        </div>
      </header>
    `;
  }
}

customElements.define("nav-bar", Navbar);
