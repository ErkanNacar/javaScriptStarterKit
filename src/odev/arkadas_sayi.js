function friendNumber(a,b) {
    let value_a=0
    let value_b=0
    let numberMod=0
        for (let i = 1; i <a ; i++) {
            numberMod=a%i
            if(numberMod==0){ 
                value_a+=i
            }
        }
        
        for (let c = 1; c <b; c++) {
            numberMod=b%c
            if(numberMod==0){
                value_b+=c
            }
        }
        
    if((value_a==b)&&(value_b==a)){
        console.log("Girilen "+a+" ve "+b+" sayıları arkadaş sayılardır.")
    }
    }

friendNumber(220,284)