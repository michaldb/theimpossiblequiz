let vragen1 = [{
        deVraag: "Name the world's largest ocean.",
        juisteAntwoord: "a",
        antwoorden: [
            "Pacific",
            "Atlantic",
            "Arctic",
            "None of the above"
        ]
    },
    {
        deVraag: "Which country is Prague in?",
        juisteAntwoord: "b",
        antwoorden: [
            "Montserrat",
            "Czech Republic",
            "Comoros",
            "None of the above"
        ]
    },
    {
        deVraag: "How many times are cocoa beans harvested?",
        juisteAntwoord: "c",
        antwoorden: [
            "Each month",
            "Once per year",
            "Twice per year",
            "None of the above"
        ]
    },
    {
        deVraag: "How many dimples does the average golf ball have?",
        juisteAntwoord: "a",
        antwoorden: [
            "336",
            "1025",
            "68",
            "None of the above"
        ]
    },
    {
        deVraag: "What sport has been played on the moon?",
        juisteAntwoord: "a",
        antwoorden: [
            "Golf",
            "Football",
            "Darts",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the official language of Brazil?",
        juisteAntwoord: "b",
        antwoorden: [
            "Spanisch",
            "Portugese",
            "Brazilian",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the criteria for an 'ultra marathon'?",
        juisteAntwoord: "b",
        antwoorden: [
            "50 km",
            "Any distance more than a marathon",
            "60 km",
            "None of the above"
        ]
    },
    {
        deVraag: "From which country does Gouda cheese originate?",
        juisteAntwoord: "c",
        antwoorden: [
            "Irak",
            "Belguim",
            "The Netherlands",
            "None of the above"
        ]
    },
    {
        deVraag: "What is famous footballer Ibrahimovic's first name?",
        juisteAntwoord: "a",
        antwoorden: [
            "Zlatan",
            "Thor",
            "Edgar",
            "None of the above"
        ]
    },
    {
        deVraag: "Where could you compete in a 'wife carry race'?",
        juisteAntwoord: "a",
        antwoorden: [
            "Finland",
            "Denmark",
            "Russia",
            "None of the above"
        ]
    }
]
let vragen2 = [{
        deVraag: "Who composed the music for Sonic the Hedgehog 3?",
        juisteAntwoord: "a",
        antwoorden: [
            "Michael Jackson",
            "Madonna",
            "David Guetta",
            "None of the above"
        ]
    },
    {
        deVraag: "Name the seventh planet from the sun?",
        juisteAntwoord: "b",
        antwoorden: [
            "Mars",
            "Uranus",
            "Pluto",
            "None of the above"
        ]
    },
    {
        deVraag: "What is a baby goat called?",
        juisteAntwoord: "c",
        antwoorden: [
            "Baby goat",
            "Calf",
            "Kid",
            "None of the above"
        ]
    },
    {
        deVraag: "Who was the first Western explorer to reach China?",
        juisteAntwoord: "c",
        antwoorden: [
            "Napoleon",
            "Captain Cook",
            "Marco Polo",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the world's longest river?",
        juisteAntwoord: "a",
        antwoorden: [
            "The Amazon",
            "The Nile",
            "The Mississippi",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the diameter of Earth? (km)",
        juisteAntwoord: "b",
        antwoorden: [
            "24805",
            "12742",
            "61563",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the Roman numeral for 1000?",
        juisteAntwoord: "b",
        antwoorden: [
            "W",
            "M",
            "XX",
            "None of the above"
        ]
    },
    {
        deVraag: "What is it called when a bottle of champagne is open with a sword?",
        juisteAntwoord: "c",
        antwoorden: [
            "Slitching",
            "Trigging",
            "Sabering",
            "None of the above"
        ]
    },
    {
        deVraag: "What color is the ‘black box’ in an aeroplane?",
        juisteAntwoord: "d",
        antwoorden: [
            "Blue",
            "Black",
            "Grey",
            "None of the above"
        ]
    },
    {
        deVraag: "What is the world's biggest island?",
        juisteAntwoord: "a",
        antwoorden: [
            "Greenland",
            "New Guinea",
            "Madagascar",
            "None of the above"
        ]
    }
]
let scorebord = [{
        naam: "Michal",
        score: "8/10",
        datum: "24/05/1998"
    },
    {
        naam: "Birthe",
        score: "9/10",
        datum: "14/08/2008"
    },
    {
        naam: "Ritchie",
        score: "4/10",
        datum: "26/02/1998"
    },
    {
        naam: "Jarno",
        score: "9/10",
        datum: "15/06/2008"
    },
    {
        naam: "Yelle",
        score: "10/10",
        datum: "21/11/1795"
    },
]
let vragenTeller = 0,
    score = 0;
let huidigeDatum = geefHuidigeDatum();

localStorage.setItem("scorebordStart", JSON.stringify(scorebord));

function startSpel(vragenReeks) {
    document.getElementById("quizVragen").style.display = "block";
    document.getElementById("btndifficulty").style.display = "none";

    vragenReeksObject = JSON.stringify(eval(vragenReeks));
    localStorage.setItem("vragenReeks", vragenReeksObject);

    showQuestion();
}

function showQuestion() {
    vragenReeks = JSON.parse(localStorage.getItem("vragenReeks"));
    let vraag = vragenReeks[vragenTeller];

    if (vragenTeller < vragenReeks.length) {
        document.getElementById("vraag").innerHTML = `Question ${(vragenTeller + 1)}:<br> ${vraag.deVraag}`;

        for (let i = 0; i < 4; i++) {
            labelId = "lblAntwoord" + i;
            document.getElementById(labelId).innerHTML = vraag.antwoorden[i];
        }

    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("formulierScorebord").style.display = "block";
    }
}

function validateAnswer() {
    vragenReeks = JSON.parse(localStorage.getItem("vragenReeks"));
    let vraag = vragenReeks[vragenTeller];
    let vraagAntwoord = null;

    if (document.getElementById("antwoordA").checked == true) {
        vraagAntwoord = "a";
    } else if (document.getElementById("antwoordB").checked == true) {
        vraagAntwoord = "b";
    } else if (document.getElementById("antwoordC").checked == true) {
        vraagAntwoord = "c";
    } else if (document.getElementById("antwoordD").checked == true) {
        vraagAntwoord = "d";
    }

    if (vraagAntwoord == null) return;

    if (vraagAntwoord == vraag.juisteAntwoord) {
        score++;
        animateScore(true);
    } else {
        animateScore(false);
    }

    unselectAnswer();

    vragenTeller++;
    showQuestion();
}

function unselectAnswer() {
    let actiefAntwoord = document.getElementById("vragenReeks").querySelectorAll(".active");
    actiefAntwoord[0].classList.remove("active");

    document.getElementById("antwoordA").checked = false;
    document.getElementById("antwoordB").checked = false;
    document.getElementById("antwoordC").checked = false;
    document.getElementById("antwoordD").checked = false;
}

$("#score-status-container").on('click', function () {
    $(this).clearQueue();
    $(this).animate({
        height: '0px',
        width: '0px'
    }, function () {
        $(this).hide();
    });
});

function animateScore(antwoord) {
    $("#score-status").html(score + " / 10");

    if (antwoord == true) {
        $("#score-status-container").css({
            "display": "flex",
            "background-color": "#46bd4d",
            "border": "5px solid #2f9c36"
        });
    } else {
        $("#score-status-container").css({
            "display": "flex",
            "background-color": "#dc3545",
            "border": "5px solid #b01927"
        });
    }
    
    $("#score-status-container").animate({
        height: '200px',
        width: '200px',
    }, function () {
        $(this).delay(1000).animate({
            height: '0px',
            width: '0px'
        }, function () {
            $(this).hide();
        });
    });
}

function scoreOpslaan() {
    let naamInvoer = document.getElementById("invoerNaam").value;
    let scoreInvoer = score + "/10";

    let nieuwePersoon = new persoonScore(naamInvoer, scoreInvoer, huidigeDatum)

    addToLeaderboard(nieuwePersoon);
}

function addToLeaderboard(nieuwePersoon) {
    if (localStorage.getItem("scorebord") == null) {
        scorebord.push(nieuwePersoon);
        scorebordSerialized = JSON.stringify(scorebord);
    } else {
        scorebord = JSON.parse(localStorage.getItem("scorebord"));
        scorebord.push(nieuwePersoon);
        scorebordSerialized = JSON.stringify(scorebord);
    }

    localStorage.setItem("scorebord", scorebordSerialized);
}

function persoonScore(naam, score, datum) {
    this.naam = naam;
    this.score = score;
    this.datum = datum;
}

function geefHuidigeDatum() {
    let datum = new Date();
    let maand = ((datum.getMonth() + 1) < 10) ? ("0" + (datum.getMonth() + 1)) : (datum.getMonth() + 1);
    let dag = (datum.getDate() < 10) ? ("0" + datum.getDate()) : datum.getDate();

    return dag + '/' + maand + '/' + datum.getFullYear();
}

$("#user-form").validate({
    submitHandler: function (form) {
        window.location.href = 'scorebord.html';
    }
});

    