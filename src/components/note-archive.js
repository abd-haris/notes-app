class NoteArchive extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notes = [];

    this.shadowRoot.innerHTML = `
        <style>
          h2 {
            text-align: center;
          }
          #note-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            width: 90vw;
            margin-top: 1rem;
          }
        </style>
        <h2>Arsip Notes</h2>
        <div id="note-list"></div>
      `;
  }

  setNoteArchive(note) {
    this.notes.push(note);
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const noteList = this.shadowRoot.querySelector("#note-list");
    noteList.innerHTML = "";

    this.notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.setNote(note);
      noteList.appendChild(noteItem);
    });
  }
}

customElements.define("note-archive", NoteArchive);
