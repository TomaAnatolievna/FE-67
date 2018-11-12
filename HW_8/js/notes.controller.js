var NotesController = (function (model, view) {

    var getNotes = function () {
        model.getNotes(function (notes) {
            view.renderNotes(notes);
        });
    }

    var listeners = function () {
        view.listen('addingNote', function (newNoteText) {
            model.addNote(newNoteText, function (notes) {
                view.renderNotes(notes);
            });
        });
    }

    return {
        init: function () {
            getNotes();
            listeners();
        }
    }

}(NotesModel, NotesView));