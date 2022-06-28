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

        // Gestion générale de la fenêtre
        el("#cadre").fond(data?.fond);
        el(".titre h1").texte(data?.titre);

        // Gestion des widgets
        const widgets = data?.widgets || [];
        let corps = el(".corps");
        corps.vider();
        widgets.forEach(w => {
            let modeleID = w.modele
            let modele = el(`#${modeleID}`).cloneNode(true);
            if (!modele) {
                return
            }
            const keys = Object.keys(w);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === "modele") continue;
                else if (keys[i] === "icone") {
                    const i = modele.querySelector("i.icone");
                    i.classList.className = "";
                    i.classList.add("fa-solid", "fa-2xl", `fa-${w.icone}`)
                }
                else if (keys[i] === "active") {
                    if (w.active === true)
                        modele.querySelector("div.wrapper").classList.add("active");
                    else
                        modele.querySelector("div.wrapper").classList.remove("active");
                } else {
                    const opt = modele.querySelector(`.${keys[i]}`);
                    opt.textContent = w[keys[i]];
                }
            }
            corps.ajouter(modele.innerHTML);
        });
    }

    function el(seleteur) {
        let element = document.querySelector(seleteur);
        if (!element) return null;

        element.fond = function (couleur) {
            element.style.backgroundColor = couleur;
        }
        element.texte = function (t) {
            element.textContent = t;
        }
        element.html = function (h) {
            if (h) {
                element.innerHTML = h;
            } else {
                return element.innerHTML;
            }
        }
        element.vider = function () {
            element.innerHTML = "";
        }
        element.ajouter = function (e) {
            element.innerHTML += e;
        }
        element.copier = function () {
            element.innerHTML += e;
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