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


}
