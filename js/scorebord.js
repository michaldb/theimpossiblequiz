let scorebordDeserialized;

if (localStorage.getItem("scorebord") == null) {
    scorebordDeserialized = JSON.parse(localStorage.getItem("scorebordStart"));
    maakTabel(scorebordDeserialized.reverse());
} else {
    scorebordDeserialized = JSON.parse(localStorage.getItem("scorebord"));
    maakTabel(scorebordDeserialized.reverse());
}

function maakTabel(data) {
    let table = document.getElementById("scorebordTable");

    for (let i = 0; i < 5; i++) {
        let row = `<tr>
                    <td>${i + 1}</td>
                    <td>${data[i].naam}</td>
                    <td>${data[i].score}</td>
                    <td>${data[i].datum}</td>
                    </tr>`;
        table.innerHTML += row;
    }
}