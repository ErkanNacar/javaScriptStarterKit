/*//JS type safe değildir.
console.log("Merhaba kodlama.io")



let dolarBugun=9.30
let dolarDun=9.20
dolarDun="Ankara"
{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun=11.2
//euroDun=11 // bu yapılamaz!!
console.log(euroDun)

let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

//var, let, const
let sayi1=10;
sayi1="Erkan Nacar";
let student={id:1,name:"Erkan"}
//console.log(student)

function save(puan=10,ogrenci) {
    //console.log(ogrenci.name+ " :" + puan)    
}
save(undefined,student);

let students=["Erkan Nacar","Gökçen Nacar","Bilgehan Aksay"]

//console.log(students)

let students2=[student,{id:2,name:"Gökhan"},"Ankara",{city:"İstanbul"},13]
//console.log(students2)

//rest Parametre
//params---->C#
//varArgs--->Java
let showPruducts=function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showPruducts)
//showPruducts(10,"Elma","Armut","Karpuz")

//spread(kelime anlamı=Ayrıştırmak)
let numbers=[2,3,5,60,32,3,43,5]
// console.log(...numbers)

// console.log(Math.max(...numbers))
// console.log(..."ABC","D",..."EFG","H")
*/
//Destructuring
let nufus=[10000,20000,30000,[40000,100000]]
let[kucuk,orta,buyuk,[enbuyuk,maksimum]]=nufus

// console.log(kucuk)
// console.log(orta)
// console.log(buyuk)
// console.log(enbuyuk)
// console.log(maksimum)

function someFunction([kucuk1],number) {
    // console.log(kucuk1)
    
}
someFunction(nufus)
//object dustructing

let category={id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)

//Redux

