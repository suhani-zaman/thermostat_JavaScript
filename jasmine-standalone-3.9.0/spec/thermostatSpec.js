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
  
  describe("Power Saving Mode", function(){
    
    it('is in power saving mode by default', function(){
      expect(thermostat.isPowerSaving()).toBeTruthy()
    });

    it('can turn off power saving mode', function(){
      thermostat.powerSavingOff()
      expect(thermostat.isPowerSaving()).toBeFalsy()
    });

    it('can turn on power saving mode', function(){
      thermostat.powerSavingOff()
      thermostat.powerSavingOn()
      expect(thermostat.isPowerSaving()).toBeTruthy()
    });
    
    it("power saving mode is on the max temperature is 25 degree", function(){
      for(let i = 0; i<27; i++){
        thermostat.up() 
      }
      expect(thermostat.isPowerSaving()).toBeTruthy()
      expect(thermostat.temperature()).toEqual(25)
    });
    
    it("power saving mode is off the max temperature is 32 degree", function(){
      thermostat.powerSavingOff()
      for(let i = 0; i<30; i++){
        thermostat.up() 
      }
      expect(thermostat.isPowerSaving()).toBeFalsy()
      expect(thermostat.temperature()).toEqual(32)
    });
  
  });

  describe("reset function", function(){

    it('resets temperature to 20', function(){
      thermostat.up() 
      thermostat.reset()
      expect(thermostat.temperature()).toEqual(20)
    });

  });

}); 
