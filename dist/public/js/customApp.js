"use strict";

window.setId = function (object) {
    $("input#id").val(object);
};

$("input#id").on('click', function (e) {
    e.preventDefault();
    setId(e.val());
});
//# sourceMappingURL=customApp.js.map