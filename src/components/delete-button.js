class DeleteButton extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
    button {
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._updateStyle();
    this._emptyContent();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.set;

    this._shadowRoot.innerHTML += `
    <button>Delete Book</button>
    `;

    this.addEventListener("click", () => {
      const noteItem = this.parentNode.parentNode;
      if (noteItem) {
        noteItem.remove();
      }
    });
  }
}

customElements.define("delete-button", DeleteButton);
