    for (let b=2; b<=1000; b++) {
        let counter=0
        for (let c = 1; c <=b ; c++) {
          let numberMod=0
          numberMod=b%c
          if(numberMod==0){
              counter++
          }
      }
      if(counter==2){
        console.log(b)  
      }
    }