var NotesView = (function () {

    var S = {
        newNoteInput: document.querySelector('#notes .note-editor .note-editor__input'),
        addBtn: document.querySelector('#notes .note-editor .note-editor__btn'),
        list: document.querySelector('#notes .notes__list'),
        removeBtn: 'note__remove-btn'
    }

    var templates = {
        note: '<li class="note">{{text}} <button data-id="{{id}}" class="note__remove-btn">Remove</button></li>'
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
            switch (eventName) {
                case 'addingNote':
                    S.addBtn.addEventListener('click', function () {
                        var newNoteText = S.newNoteInput.value;
                        cb(newNoteText);
                    })
                    break;
                case 'removeNote':
                    S.list.addEventListener('click', function (e) {
                        var el = e.target;
                        if (el.className === S.removeBtn) {
                            for (var i = 0; i < el.attributes.length; i++) {
                                if (el.attributes[i].name === 'data-id') {
                                    var id = +el.attributes[i].value;
                                    cb(id);
                                    return;
                                }
                            }
                        }
                    })
                    break;
                default:
                    console.warn('This event is not ready');
                    break;
            }
        }
    }

}());