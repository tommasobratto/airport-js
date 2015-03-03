describe('weather', function() {

  var weather = new Weather()

  it('can be sunny', function() {
    expect(weather.randomConditions).toBe("sunny")
  });

});