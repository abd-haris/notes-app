import "../components/note-item.js";
import "../components/note-list.js";
import "../components/note-archive.js";

import notesData from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const noteListEl = document.querySelector("note-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah form di-submit

    const title = document.getElementById("title").value;
    const shortDescription = document.getElementById("shortDescription").value;

    const notesInput = {
      id: String(generateId()),
      title: title,
      body: shortDescription,
      createdAt: String(new Date()),
      archived: false,
    };

    function generateId() {
      return +new Date();
    }

    notesData.unshift(notesInput);
    noteListEl.setNoteList(notesData); // Tambahkan catatan ke web component

    form.reset(); // Reset form
  });
});
