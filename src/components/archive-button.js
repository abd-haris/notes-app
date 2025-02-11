import notesData from "../data/data.js";

class ArchivedButton extends HTMLElement {
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
        background-color: green;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._updateStyle();
    this._emptyContent();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <button>Archived</button>
    `;

    this.addEventListener("click", () => {
      const noteItem = this.parentNode.parentNode;

      if (noteItem) {
        const noteId = noteItem._note.id;

        const noteIndex = notesData.findIndex((note) => note.id === noteId);

        if (noteIndex !== -1) {
          notesData[noteIndex].archived = true;

          const archiveNote = document.querySelector("note-archive");
          if (archiveNote) {
            archiveNote.setArchiveNote(notesData[noteIndex]);
          }
          noteItem.remove();
        }
      }
    });
  }
}

customElements.define("archive-button", ArchivedButton);
