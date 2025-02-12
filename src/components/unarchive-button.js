import notesData from "../data/data.js";

class UnarchivedButton extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._isArchived = notesData.map((note) => note.archived);
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
    <button>${this._isArchived ? "Archive" : "Unarchive"}</button>
    `;

    this.addEventListener("click", () => {
      const noteItem = this.parentNode.parentNode;

      if (noteItem) {
        const noteId = noteItem._note.id;

        const noteIndex = notesData.findIndex((note) => note.id === noteId);

        if (noteIndex !== -1) {
          notesData[noteIndex].archived = false;
          const noteList = document.querySelector("note-list");
          if (noteList) {
            noteList.setNoteList(notesData[noteIndex]);
          }
        }
        noteItem.remove(noteId);
      }
    });
  }
}

customElements.define("unarchive-button", UnarchivedButton);
