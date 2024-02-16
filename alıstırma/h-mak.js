// Arrowfunction ile ic ice fonksiyonlar

const topla = (s1, s2) =>  s1 + s2
const carp = (s1, s2) =>  s1 * s2
const cikar = (s1, s2) =>  s1 - s2
const bolme = (s1, s2) =>  s1 / s2

const hesapla = (num1, num2, op) => {
let sonuc = 0
switch (op) {
    case "+":
        sonuc = topla( num1, num2)
        break;
    case "*":
        sonuc = carp(num1, num2)
        break;
    case "-":
        sonuc = cikar(num1, num2)
        break;
    case "/":
        sonuc = bolme(num1, num2)
        break;

    default:
        alert("Yanlis islem")
        break;
}
    return sonuc
}


// invoke kısmı 

const num1 = +prompt("{1.sayi}")
const op = prompt("islem giriniz: +-*/:}")
const num2 = +prompt("sayi2")

const sonuc = hesapla(num1, num2, op) 
console.log(`${num1} ${op} ${num2} = ${sonuc}`)