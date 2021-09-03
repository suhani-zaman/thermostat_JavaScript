class Thermostat {
  constructor(){
    this.temp = 20
    this.MIN_TEMP = 10
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
}
