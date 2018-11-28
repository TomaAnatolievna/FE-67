var NotesModel = (function () {

    var NOTES = [{
            id: 1,
            text: 'Some text 1'
        },
        {
            id: 2,
            text: 'Some text 2'
        },
        {
            id: 3,
            text: 'Some text 3'
        },
        {
            id: 4,
            text: 'Some text 4'
        }
    ]

    var generateId = function () {
        return NOTES[NOTES.length - 1].id + 1;
    }

    return {
        getNotes: function (renderer) {
            renderer(NOTES);
        },
        addNote: function (noteText, cb) {

            var newNote = {
                id: generateId(),
                text: noteText
            }

            NOTES.push(newNote);
            cb(NOTES);
        },
        removeNote: function (id, cb) {
            for (var i = 0; i < NOTES.length; i++) {
                if (NOTES[i].id === id) {
                    NOTES.splice(i, 1);
                    break;
                }
            }
            // return NOTES;
            cb(NOTES);
        }
    }

}());