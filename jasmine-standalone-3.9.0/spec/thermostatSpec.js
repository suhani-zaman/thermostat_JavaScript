describe('Thermostat', function(){
  let thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe("intialize thermostat", function() {
    it("checks function thermostat", function() {
      expect(thermostat.temperature).toBeDefined();
    });
    it("cheks tempearture is 20 degree at start", function(){
      expect(thermostat.temperature()).toEqual(20)
    });
  });
  describe("increase and descrease:", function(){
    it ("increases the temperature", function(){
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21)
    });
    it("decreases the temperature", function(){
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19)
    });
    it("checks minimum temperature is 10", function(){
      for(let i = 0; i<12; i++){
        thermostat.down() 
      }
      expect(thermostat.temperature()).toEqual(10)
    });
  });
}); 
