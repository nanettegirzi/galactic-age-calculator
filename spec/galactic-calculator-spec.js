import { Age } from './../src/galactic-calculator.js';

describe ('Age', function(){
  let newAge;

  beforeEach(function(){
    newAge = new Age ('1980-05-30', 'female', 'low', 'no', 'yes' )
  });

  it ('should caclulate new age with birthday', function(){
    expect(newAge.birthday).toEqual('1980-05-30')
  });

  it('should calculate age based on birthday', function(){
    expect(newAge.calculateAge()).toEqual(37)
  });

  it('should caclulate users age on Mercury', function(){
    expect(newAge.ageOnMercury()).toEqual(154)
  });

  it('should caclulate users age on Venus', function(){
    expect(newAge.ageOnVenus()).toEqual(59)
  });

  it('should caclulate users age on Mars', function(){
    expect(newAge.ageOnMars()).toEqual(19)
  });

  it('should caclulate users age on Jupiter', function(){
    expect(newAge.ageOnJupiter()).toEqual(3)
  });




});
