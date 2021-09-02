class Thermostat {
  constructor(){
    this.temp = 20
  }
  temperature(){
    return this.temp;
  }
  up(number){
    this.temp += number;
  }
  down(number){
    this.temp -= number;
  }
}
