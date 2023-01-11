function outputDsiResult() {

    let index = 0;
    for (let i = 1; i <= 20; i++) {
        index += parseInt(document.getElementById(`q${i}`).value);
    }

    let index_letter;
    if (index > 95) index_letter = "A";
    else if (index > 80) index_letter = "B";
    else if (index > 65) index_letter = "C";
    else if (index > 50) index_letter = "D";
    else index_letter = "E";

    let card = document.querySelector(".card-body");
    card.textContent = "Der berechnete Index ist " + index_letter + " (" + index + " Punkte von 100).";
    card.classList.remove("bg-green", "bg-lightgreen", "bg-yellow", "bg-orange", "bg-red");
    if (index_letter === "A") card.classList.add("bg-green");
    else if (index_letter === "B") card.classList.add("bg-lightgreen");
    else if (index_letter === "C") card.classList.add("bg-yellow");
    else if (index_letter === "D") card.classList.add("bg-orange");
    else card.classList.add("bg-red");
}