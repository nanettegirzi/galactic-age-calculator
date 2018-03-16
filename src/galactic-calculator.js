export class Age {
  constructor(birthday, gender, stress, smoker, activity) {
    this.birthday = birthday;
    this.gender = gender;
    this.stress = stress;
    this.smoker = smoker;
    this.activity = activity;
  }

  calculateAge() {
    let today = new Date();
    let birthday = new Date (this.birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
      age--;
    }
    return age;
  }
}
