(function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/json");
    editor.on("change", function (e) {
        try {
            const d = editor.getValue()
            const ui = JSON.parse(d)
            updateScreen(ui);
            saveData(d);
        } catch (e) {

        }
    });

    // Au chargement de la page on récupère la dernière sauvegarde
    const firstData = getData();
    updateScreen(firstData);
    editor.setValue(firstData, 1);

    function updateScreen(data) {
        console.log(data);
        
        el("#cadre").fond(data?.fond);
        el(".titre h1").texte(data?.titre);
    }

    function el(seleteur) {
        let element = document.querySelector(seleteur);
        element.fond = function (couleur) {
            element.style.backgroundColor = couleur;
        }
        element.texte = function (t) {
            element.textContent = t;
        }
        return element;
    }

    function saveData(json) {
        localStorage.setItem('data', json);
    }

    function getData() {
        const data = localStorage.getItem('data');
        return (!data) ? "{}" : data;
    }
})();