# iot-ui
## Desciprion
Cet outil permet de créer des interfaces d'adminitration d'objets connectées (lampes, interrupteurs, thermostats, etc.). La création de l'interface se fait à partir d'une description en JSON (cf. exemple ci-dessous).
## Exemple d'interface
```json
{
    "fond": "#f1f1f1",
    "titre": "Accueil",
    "widgets": [
        {
            "modele": "modele-2x2-on-off",
            "titre": "Lumière",
            "details": "Douche, salon",
            "active": false,
            "icone": "lightbulb"
        },
        {
            "modele": "modele-2x2-on-off",
            "titre": "Mode dodo",
            "details": "Tout éteindre",
            "active": true,
            "icone": "bed"
        }
    ]
}
```
## Résultat obtenu
!["Interface d'exemple"](/img/iot-iu-screenshot.png)