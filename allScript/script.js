//USER STORY: REQUEST FORM USER: All Commentart in Englisch
/*  notizen anzeigen lässen*/
let notesTitel = ["F1", "F2", "F3", "F4", "L1"];
let notes = ["Banane", "Carotte", "Tomato", "Orange", "Macabo"];
let trashTitleNote = [];
let trashNotes = [];
// render function : Display content on the HTML page
function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {

        contentRef.innerHTML += getNoteTemplate(indexNote);

    }

}
function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {

        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);

    }

}
// template est le cabarit d'un modele utilise pour generer d'autre modele de la mm formme
function getNoteTemplate(indexNote) {

    return `<p> ++ Title: ${notesTitel[indexNote]} ---> ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {

    return `<p> ++  Title: ${notesTitel[indexTrashNote]} --->${trashNotes[indexTrashNote]}<button onclick="putToTrash(${indexTrashNote})">Y</button></p>`;
}
//ich muss definieren wo sie anzuzeigen sind
//wann sie anzeigt
/*Notizen hinzufügen (
eingabe vom user definieren
eingabe auslesen
eingabe specihern
eingabe anzeigen lässen
)*/
function addNote() { //eingabe auslesen
    let noteInputref = document.getElementById('note_input'); // For every Element HTMl immer nameRef to distinguisch
    let noteInput = noteInputref.value;
    //eingabe specihern
    notes.push(noteInput);
    renderNotes();
    noteInputref.value = "";
}
// notizen löschen
//Functionnel ma variante
function deleteNote(indexNote) {
    //console.log(notes.splice(indexNote, 1));
    let trashNote = notes.splice(indexNote, 1);
    let trashNoteTitle = trashTitleNote.splice(indexNote, 1);
    trashNotes.push(trashNote); //push index value to trashnotes array
    trashTitleNote.push(trashNoteTitle);
    renderNotes();
    renderTrashNotes(); // result official display without  Trash

}

function putToTrash(indexTrashNote) {
    //let putToTrash =
    trashNotes.splice(indexTrashNote, 1);
    //trashNotes.pop(putToTrash);
    renderTrashNotes(); // result official display with Trash

}

/*
// Kevin Ansatz(Method) ??
function putToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote); //push index value to trashnotes array
    renderNotes();
    renderTrashNotes(); // result official display without  Trash
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes(); // result official display without  Trash
}
*/



// notizen archivieren
