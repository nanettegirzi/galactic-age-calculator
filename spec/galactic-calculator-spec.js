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
  })
});
