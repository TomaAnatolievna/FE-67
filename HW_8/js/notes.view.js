var NotesView = (function () {

    var S = {
        newNoteInput: document.querySelector('#notes .note-editor .note-editor__input'),
        addBtn: document.querySelector('#notes .note-editor .note-editor__btn'),
        list: document.querySelector('#notes .notes__list')
    }

    var templates = {
        note: '<li><b>{{id}}</b> - {{text}}</li>'
    }

    return {
        renderNotes: function (notes) {
            var items = '';
            for (var i = 0; i < notes.length; i++) {
                // items += '<li><b>{{id}}</b> - {{text}}</li>';
                // items += '<li><b>' + notes[i].id + '</b> - ' + notes[i].text + '</li>';
                var note = templates.note;
                note = note.replace('{{text}}', notes[i].text);
                note = note.replace('{{id}}', notes[i].id);
                items += note;
            }
            S.list.innerHTML = items;
        },

        listen: function (eventName, cb) {
            if (eventName === 'addingNote') {
                S.addBtn.addEventListener('click', function () {
                    var newNoteText = S.newNoteInput.value;
                    cb(newNoteText);
                })
            }
        }
    }

}());