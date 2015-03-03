
describe('plane', function() {

  var plane = new Plane;

  it('have a flying status when created', function() {
    expect(plane.isFlying).toBe(true)
  });

  it("doesn't have a flying status when it lands", function() {
    plane.land();
    expect(plane.isFlying).toBe(false)
  });

});
