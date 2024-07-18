document.getElementById('note-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const noteContent = document.getElementById('note-content').value;
    if (noteContent) {
        addNoteToList(noteContent);
        document.getElementById('note-content').value = '';
    }
});

function addNoteToList(content) {
    const notesList = document.getElementById('notes-list');
    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = content;
    notesList.appendChild(note);
}
