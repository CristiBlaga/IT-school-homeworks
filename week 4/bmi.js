const Costumer1 = {
    name: 'John Doe',
    gender: 'M',
    height: 160,
    weight: 70 
}

const Costumer2 = {
    name: 'Mary Anne',
    gender: 'F',
    height: 172,
    weight: 72      
  }
  
  function bmi (x, y) {
    
    let bmi = x / (y**2);
    
    if(bmi < 18.5){
      return bmi.valueOf,"| Underweight";
    }else if (bmi < 25){
      return bmi.valueOf,"| Normal";
    }else if (bmi < 30){
      return bmi.valueOf,"| Overweight";
    }else{
      return bmi.valueOf,"| Obese";
    }
  }
 console.log (Costumer1.name,"|",Costumer1.gender,"|",bmi(Costumer1.weight, Costumer1.height));
 console.log (Costumer2.name,"|",Costumer2.gender,"|",bmi(Costumer2.weight, Costumer2.height));