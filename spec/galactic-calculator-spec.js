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
    expect(newAge.ageMercury()).toEqual(154)
  });

  it('should caclulate users age on Venus', function(){
    expect(newAge.ageVenus()).toEqual(59)
  });

  it('should caclulate users age on Mars', function(){
    expect(newAge.ageMars()).toEqual(19)
  });

  it('should caclulate users age on Jupiter', function(){
    expect(newAge.ageJupiter()).toEqual(3)
  });

  it('should caclulate life expectancy on Earth', function(){
    expect(newAge.lifeExpectancyEarth()).toEqual(78)
  });

  it('should calculate life expectancy on Mercury', function(){
    expect(newAge.lifeExpectancyMercury()).toEqual(325)
  });

  it('should calculate life expectancy on Venus', function(){
    expect(newAge.lifeExpectancyVenus()).toEqual(125)
  });

  it('should calculate life expectancy on Mars', function(){
    expect(newAge.lifeExpectancyMars()).toEqual(41)
  });

  it('should calculate life expectancy on Jupiter', function(){
    expect(newAge.lifeExpectancyJupiter()).toEqual(6)
  });

  it('should calculate life left on Earth', function(){
    expect(newAge.lifeLeftEarth()).toEqual(41)
  });

  it('should calculate life left on Mercury', function(){
    expect(newAge.lifeLeftMercury()).toEqual(171)
  })

  it('should calculate life left on Venus', function(){
    expect(newAge.lifeLeftVenus()).toEqual(66)
  })

  it('should calculate life left on Mars', function(){
    expect(newAge.lifeLeftMars()).toEqual(22)
  })

  it('should calculate life left on Jupiter', function(){
    expect(newAge.lifeLeftJupiter()).toEqual(3)
  })  

});
