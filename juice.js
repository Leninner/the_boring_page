let min = 7;
let max = 10;
function nota(min, max){
    let nota = Math.floor(min + Math.random() * (max - min));
    return nota;
}
alert('La nota que merece mi página es: ' + nota(min, max));