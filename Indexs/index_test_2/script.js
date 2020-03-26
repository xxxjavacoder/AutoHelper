function check() {

    let cards = document.getElementsByClassName('card');

    document.getElementById('output').innerHTML = '';

    let answer;

    let k1 = 0.0,
        k2 = 0.0,
        k3 = 0.0;

    let r1 = document.getElementsByName("r1");

    if (getValueFromRadio(r1) === "0") {

        k1 += 0.1;
        k2 += 0.1;
        k3 += 0.1;

        cards[0].style.backgroundColor = '#CD5C5C';
    }else cards[0].style.backgroundColor = '#90EE90';


    let r2 = document.getElementsByName("r2");

    if (getValueFromRadio(r2) === "0") {

        k1 += 0.2;
        k2 += 0.3;
        k3 += 0.1;

        cards[1].style.backgroundColor = '#CD5C5C';
    }else cards[1].style.backgroundColor = '#90EE90';

    let r3 = document.getElementsByName("r3");

    if (getValueFromRadio(r3) === "0") {

        k1 += 0.3;
        k2 += 0.1;
        k3 += 0.2;

        cards[2].style.backgroundColor = '#CD5C5C';
    }else cards[2].style.backgroundColor = '#90EE90';

    let r4 = document.getElementsByName("r4");

    if (getValueFromRadio(r4) === "0") {

        k1 += 0.1;
        k2 += 0.2;
        k3 += 0.3;

        cards[3].style.backgroundColor = '#CD5C5C';
    }else cards[3].style.backgroundColor = '#90EE90';

    let r5 = document.getElementsByName("r5");

    if (getValueFromRadio(r5) === "0") {

        k1 += 0.3;
        k2 += 0.3;
        k3 += 0.3;

        cards[4].style.backgroundColor = '#CD5C5C';
    }else cards[4].style.backgroundColor = '#90EE90';

    if(k1 > k2 && k1 > k3){
        answer = "K_1!!!<br>";
        document.getElementById('output').innerHTML += answer;
    }else if(k2 > k1 && k2 > k3){
        answer = "K_2!!!<br>";
        document.getElementById('output').innerHTML += answer;
    }else if(k3 > k1 && k3 > k2){
        answer = "K_3!!!<br>";
        document.getElementById('output').innerHTML += answer;
    }else {
        answer = "K_1 = K_2 = K_3!!!<br>";
    document.getElementById('output').innerHTML += answer;
    }


}

function getValueFromRadio(element) {
    return [...element].find(item => item.checked).value
}