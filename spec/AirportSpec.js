describe('airport', function() {

  var airport = new Airport();
  var plane;
  var weather;

  beforeEach( function() {
    plane = jasmine.createSpyObj('plane', [ 'land', 'takeOff' ]);
    weather = jasmine.createSpyObj('weather', [ 'randomConditions' ])

    weather = {
      randomConditions: function(value) {
        var conditions;
        weather.conditions = value;
      }
    }
  });

  describe('the weather is sunny', function() {

    it('should dock a plane', function() {
      
      weather.randomConditions("sunny");
      airport.dock(plane, weather);
      expect(airport.planes).toEqual([plane]);
    
    });

    it('should allow a plane to take off', function() {
     
      weather.randomConditions("sunny");
      airport.dock(plane, weather);
      airport.release(plane, weather);
      expect(airport.planes).toEqual([]);
    
    })

  });

  describe('the weather is stormy', function() {

    it('cannot allow a plane to land', function() {

      weather.randomConditions("stormy");
      airport.dock(plane, weather);
      expect(airport.planes).toEqual([]);

    });

    it('cannot allow a plane to take off', function() {

      weather.randomConditions("sunny");
      airport.dock(plane, weather);
      weather.randomConditions("stormy");
      airport.release(plane, weather);
      expect(airport.planes).toEqual([plane]);

    });

  });

  describe('hangar management: ', function() {

    it("should know when it's full", function() { 
      
      cleanUpHangar(airport);      
      weather.randomConditions("sunny");
      airport.dock(plane, weather);
      airport.dock(plane, weather);
      airport.dock(plane, weather);
      expect(airport.isFull()).toEqual(true);

    });

    it("should know when it's empty", function() {

      weather.randomConditions("sunny");
      airport.dock(plane, weather)
      airport.release(plane, weather)
      expect(airport.isEmpty()).toEqual(true);

    });

  }); 

});