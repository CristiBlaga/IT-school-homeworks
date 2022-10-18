const Costumer1 = {
    name: 'John Doe',
    gender: 'M',
    height: 1.64,
    weight: 69
}

const Costumer2 = {
    name: 'Mary Anne',
    gender: 'F',
    height: 1.72,
    weight: 72      
  }
  
  function bmi (x, y) {
    
    let bmi = x / (y**2)
    
    if(bmi < 18.5){
      return bmi.toFixed(2) + "| Underweight";
    }else if (bmi < 25){
      return bmi.toFixed(2) + "| Normal";
    }else if (bmi < 30){
      return bmi.toFixed(2) + "| Overweight";
    }else{
      return bmi.toFixed(2) + "| Obese";
    }
  }
 console.log (Costumer1.name,"|",Costumer1.gender,"|",bmi(Costumer1.weight, Costumer1.height));
 console.log (Costumer2.name,"|",Costumer2.gender,"|",bmi(Costumer2.weight, Costumer2.height));