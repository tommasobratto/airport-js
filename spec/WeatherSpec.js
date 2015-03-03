describe('weather', function() {

  var weather = new Weather();

  it('can be sunny', function() {
    weather.randomNumberGenerator
    expect(weather.randomConditions(randomNumber)).toEqual("sunny")
  });

});