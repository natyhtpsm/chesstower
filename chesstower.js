function chess(positionTower, positionEnemy){
  let arrayTower = positionTower.toString();
  let arrayEnemy = positionEnemy.toString();
  
  if(arrayTower[0] == arrayEnemy[0] || arrayTower[1] == arrayEnemy[1]){
    return "Yes"
  }
    else {return "No"}
  
  }
  
  
  
  
