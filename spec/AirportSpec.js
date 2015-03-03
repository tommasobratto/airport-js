describe('airport', function() {

  var airport = new Airport();
  var plane;

  beforeEach( function() {
    plane = jasmine.createSpyObj('plane', [ 'land', 'takeOff'])
  });

  describe('the weather is sunny', function() {

    it('should dock a plane', function() {
      
      airport.dock(plane);
      expect(airport.planes()).toEqual([plane])
    
    });

    it('should allow a plane to take off', function() {
     
      airport.dock(plane)
      airport.release(plane)
      expect(airport.planes()).toEqual([])
    
    })

  });

  describe('the weather is stormy', function() {

    it('cannot allow a plane to land', function() {

      airport.dock(plane)
      expect(airport.planes()).toEqual([])

    });

    it('cannot allow a plane to take off', function() {

      airport.dock(plane)
      airport.release(plane)
      expect(airport.planes()).toEqual[plane]

    });

  });

  describe('hangar management: ', function() {

    it("should know when it's full", function() { 
      
      airport.dock(plane);
      airport.dock(plane);
      airport.dock(plane);
      expect(airport.isFull()).toEqual(true)

    });

    it("should know when it's empty", function() {

      airport.release(plane)
      expect(airport.isEmpty()).toEqual(true)

    });

  }); 

});