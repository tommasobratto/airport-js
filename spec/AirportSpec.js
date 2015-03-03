describe('airport', function() {

  var airport = new Airport();
  var plane;

  beforeEach( function() {
    plane = jasmine.createSpyObj('plane', [ 'land', 'takeOff'])
  });

  it('should dock a plane', function() {
    airport.dock(plane);
    expect(airport.planes).toEqual([plane])
  });

  it('should allow a plane to take off', function(){
    airport.dock(plane)
    airport.release(plane)
    expect(airport.planes).toEqual([])
  })

});