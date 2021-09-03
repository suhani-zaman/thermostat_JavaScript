class Thermostat {
  
  constructor(){
    this.temp = 20
    this.MIN_TEMP = 10
    this.powerSavingMode = true
  }
  
  temperature(){
    return this.temp;
  }
  
  up(){
    this.temp++;
  }
  
  down(){
    if (this.temp > 10){
      this.temp--;
    }else{
      return this.MIN_TEMP
    }
  }

  powerSavingOn(){
    this.powerSavingMode = true;
  }

  powerSavingOff(){
    this.powerSavingMode = false;
  }

  isPowerSaving(){
    return this.powerSavingMode
  }

}
