import "../components/note-item.js";
import "../components/note-list.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const noteListEl = document.querySelector("note-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah form di-submit

    const title = document.getElementById("title").value;
    const shortDescription = document.getElementById("shortDescription").value;

    const notesInput = [
      {
        title: title,
        body: shortDescription,
        id: String(generateId()),
        archived: false,
      },
    ];

    function generateId() {
      return +new Date();
    }

    console.log(notesInput);
    noteListEl.setNoteList(notesInput); // Tambahkan catatan ke web component

    form.reset(); // Reset form
  });
});
