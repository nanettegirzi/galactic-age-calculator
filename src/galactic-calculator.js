export class Age {
  constructor(birthday, gender, stress, smoker, activity) {
    this.birthday = birthday;
    this.gender = gender;
    this.stress = stress;
    this.smoker = smoker;
    this.activity = activity;
  }

  calculateAge() {
    let birthday = this.birthday;
    let year = birthday.slice(0,4);
    let month = birthday.slice(5,7);
    let day = birthday.slice(8,10);
    let date = month + '/' + day + '/' + year + ' 00:00:00';
    let newDate = new Date(date);
    let millisBirthday = newDate.getTime();
    let millisNow = Date.now();
    let ageInSeconds = (millisNow - millisBirthday)/1000;
    let ageInYears = Math.floor(ageInSeconds/31536000);
    return ageInYears;
  }

  ageMercury() {
    let mercuryAge = Math.floor(this.calculateAge() / 0.24)
    return mercuryAge;
  }

  ageVenus() {
    let mercuryAge = Math.floor(this.calculateAge() / 0.62)
    return mercuryAge;
  }

  ageMars() {
    let mercuryAge = Math.floor(this.calculateAge() / 1.88)
    return mercuryAge;
  }

  ageJupiter() {
    let mercuryAge = Math.floor(this.calculateAge() / 11.86)
    return mercuryAge;
  }

  lifeExpectancyEarth(){
    let earthAverage = 71;
    // average life expectancy on earth is around 71 years according to Wikipedia. Male average is 68yrs and female average is 72 years.
    if (this.gender === 'male') {
      earthAverage -= 3;
    } else {
      earthAverage += 1;
    }
    //just made these up
    if (this.stress === 'high') {
      earthAverage -= 5;
    } else if (this.stress === 'medium') {
      earthAverage -= 2;
    } else if (this.stress === "low") {
      earthAverage += 1;
    }
    //smoking is BAD for you, don't do it
    if (this.smoker === 'yes'){
      earthAverage -= 10;
    }
    //exercise is GOOD. Do more of it
    if (this.activity === 'yes'){
      earthAverage += 5;
    }
    return earthAverage;
  }

  lifeExpectancyMercury(){
    let mercuryLife = Math.floor(this.lifeExpectancyEarth() / 0.24);
    return mercuryLife;
  }

  lifeExpectancyVenus(){
    let venusLife = Math.floor(this.lifeExpectancyEarth() / 0.62);
    return venusLife;
  }

  lifeExpectancyMars(){
    let marsLife = Math.floor(this.lifeExpectancyEarth() / 1.88);
    return marsLife;
  }

  lifeExpectancyJupiter(){
    let jupiterLife = Math.floor(this.lifeExpectancyEarth() / 11.86);
    return jupiterLife;
  }

  lifeLeftEarth(){
    let yearsLeft = Math.floor(this.lifeExpectancyEarth() - this.calculateAge())
    return yearsLeft;
  }

  lifeLeftMercury(){
    let yearsLeft = Math.floor(this.lifeExpectancyMercury() - this.ageMercury())
    return yearsLeft;
  }

  lifeLeftVenus(){
    let yearsLeft = Math.floor(this.lifeExpectancyVenus() - this.ageVenus())
    return yearsLeft;
  }

  lifeLeftMars(){
    let yearsLeft = Math.floor(this.lifeExpectancyMars() - this.ageMars())
    return yearsLeft;
  }

  lifeLeftJupiter(){
    let yearsLeft = Math.floor(this.lifeExpectancyJupiter() - this.ageJupiter())
    return yearsLeft;
  }

  overLifeExpectancy(){
    if  (Math.floor(this.calculateAge() > this.lifeExpectancyEarth())) {
      return "Good job for still being alive!!"
    }

  }
 }
