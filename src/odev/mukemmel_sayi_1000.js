for (let i=1; i<=1000; i++) {
    let value=0
    for (let a = 1; a <=i ; a++) {
      let numberMod=0
      numberMod=i%a
      if(numberMod==0){
          value+=a
      }
  }

  if(value==2*i){
    console.log("Girilen "+i+" sayısı mükemmel sayıdır.")
  }
}