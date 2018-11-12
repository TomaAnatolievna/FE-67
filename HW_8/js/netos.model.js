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

    return {
        getNotes: function (renderer) {
            renderer(NOTES);
        },
        addNote: function (noteText, cb) {
            var newNote = {
                id: 555, // Generate new ID
                text: noteText
            }

            NOTES.push(newNote);
            cb(NOTES);
        }
    }

}());