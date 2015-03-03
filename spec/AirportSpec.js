describe('airport', function() {

  var airport = new Airport;

  it('should dock a plane', function() {
    airport.dock(plane);
    expect(aiport.planes).toEqual([plane])
  });

});