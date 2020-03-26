function check() {

    let answer;
    let r1 = document.getElementsByName("r1");
    if (getValueFromRadio(r1) === "0") {
        answer = "Проверте лампочку в приборном щитке и пройлите тест заново!";
        alert(answer);
    }

    let r2 = document.getElementsByName("r2");
    if (getValueFromRadio(r2) === "0") {
        answer = "Проверте контакты на стартере и его сохранность!";
        alert(answer);
    }

    let r3 = document.getElementsByName("r3");
    if (getValueFromRadio(r3) === "0") {
        answer = "Проверьте проводку и предохранители подкапотного пространства!";
        alert(answer);
    }

    let r4 = document.getElementsByName("r4");
    if (getValueFromRadio(r4) === "0") {
        answer = "Залейте топливо в топливный бак авто и прпробуйте заново!";
        alert(answer);
    }

    let r5 = document.getElementsByName("r5");
    if (getValueFromRadio(r5) === "0") {
        answer = "Проверте топливную магистраль (Требует визита на СТО!!!)";
        alert(answer);
    }

}

function getValueFromRadio(element) {
    return [...element].find(item => item.checked).value
}