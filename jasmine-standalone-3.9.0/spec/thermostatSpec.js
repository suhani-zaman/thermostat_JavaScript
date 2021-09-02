describe('Thermostat', function(){
  let thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe("intialize thermostat", function() {
    it("checks function thermostat", function() {
      expect(thermostat.temperature).toBeDefined();
    });
    it("cheks tempearture is 20 degree", function(){
      expect(thermostat.temperature()).toEqual(20)
    });
  });
  describe("increase and descrease:", function(){
    it ("increases the temperature", function(){
      thermostat.up(5)
      expect(thermostat.temperature()).toEqual(25)
    });
    it("decreases the temperature", function(){
      thermostat.down(3)
      expect(thermostat.temperature()).toEqual(17)
    });
  });
});
