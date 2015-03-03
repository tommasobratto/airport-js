describe('weather', function() {

  var weather = new Weather();

  it('can be sunny', function() {
    spyOn(weather, 'randomNumberGenerator').and.returnValue(2)
    expect(weather.randomConditions(this.randomNumberGenerator)).toEqual("sunny")
  });

});