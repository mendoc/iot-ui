(function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/json");
    editor.on("change", function (e) {
        try {
            const ui = JSON.parse(editor.getValue())
            updateScreen(ui)
        } catch (e) {

        }
    });

    function updateScreen(data) {
        console.log(data);
        el("#cadre").fond(data?.fond)
        el(".titre h1").texte(data?.titre)
    }

    function el(seleteur) {
        let element = document.querySelector(seleteur);
        element.fond = function (couleur) {
            element.style.backgroundColor = couleur
        }
        element.texte = function (t) {
            element.textContent = t
        }
        return element;
    }
})();