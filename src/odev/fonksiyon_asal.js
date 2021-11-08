function primeNumber(...numbers) {
    for (let b=0; b<numbers.length; b++) {
        let counter=0
        for (let c = 1; c <=numbers[b] ; c++) {
          let numberMod=0
          numberMod=numbers[b]%c
          if(numberMod==0){
              counter++
          }
      }
      if(counter==2){
        console.log("Girilen "+numbers[b]+" sayısı asal sayıdır.")  
      }else{
        console.log("Girilen "+numbers[b]+" sayısı asal sayı değildir.")
      }
    }
}

primeNumber(2,3,4,5,6,7,8,9,10,11,12,91,17,56,89)