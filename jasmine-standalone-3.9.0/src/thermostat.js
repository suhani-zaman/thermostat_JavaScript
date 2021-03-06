class Thermostat {
  
  constructor(){
    this.DEFAULT_TEMP = 20
    this.temp = this.DEFAULT_TEMP
    this.MIN_TEMP = 10
    this.powerSavingMode = true
    this.MAX_PSON_TEMP = 25
    this.MAX_PSOFF_TEMP = 32
  }
  
  temperature(){
    return this.temp;
  }
  
  up(){
    if (this.powerSavingMode === true && this.temp < this.MAX_PSON_TEMP){
      this.temp++; 
    }
    if (this.powerSavingMode === false && this.temp < this.MAX_PSOFF_TEMP){
      this.temp++; 
    }
  }
  
  down(){
    if (this.temp > this.MIN_TEMP){
      this.temp--;
    }else{
      return this.MIN_TEMP
    }
  }
  
  reset(){
    this.temp = this.DEFAULT_TEMP
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
  currentUsage(){
    if (this.temp < 18){
      return "Low-Usage";
    }
    if (this.temp <= 25){
      return "Medium-Usage";
    }else{
      return "High-Usage"
    }
  }
}
