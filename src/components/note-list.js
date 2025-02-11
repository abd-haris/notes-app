class NoteList extends HTMLElement {
  constructor() {
    super();

    this._noteList = [];
    this._style = document.createElement("style");
  }

  setNoteList(value) {
    this._noteList = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
    note-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        width: 90vw;
        margin-top: 1rem;
    }
    `;
  }

  render() {
    this.updateStyle();

    const noteItemElements = this._noteList.map((item) => {
      const note = document.createElement("note-item");
      if (item.archived == false) {
        note.setNote(item);
        return note;
      }
    });

    this.innerHTML = "";
    this.append(this._style, ...noteItemElements);
  }
}

customElements.define("note-list", NoteList);
