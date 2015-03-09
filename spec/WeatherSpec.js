describe('weather', function() {

  var weather = new Weather();

  it('can be sunny', function() {
    spyOn(weather, 'randomConditions').and.returnValue("sunny")
    expect(weather.randomConditions()).toEqual("sunny")
  });

});