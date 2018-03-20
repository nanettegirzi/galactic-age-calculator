import $ from 'jquery';
import { Age } from './../src/galactic-calculator.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#age-form").submit(function(event) {
    event.preventDefault();

    let birthday = $("#birthday").val();
    let gender = $("input[name=gender]:checked").val();
    let stress = $("select#stress:selected").val();
    let smoker = $("input[name=smoker]:checked").val();
    let activity = $("input[name=activity]:checked").val();

    let userAge = new Age(birthday, gender, stress, smoker, activity);

    let userAgeEarth = userAge.calculateAge();
    $('#ageEarth').text(userAgeEarth);
    let userAgeMercury= userAge.ageMercury();
    $('#ageMercury').text(userAgeMercury);
    let userAgeVenus= userAge.ageVenus();
    $('#ageVenus').text(userAgeVenus);
    let userAgeMars = userAge.ageMars();
    $('#ageMars').text(userAgeMars);
    let userAgeJupiter = userAge.ageJupiter();
    $('#ageJupiter').text(userAgeJupiter);

    let userLifeEarth = userAge.lifeExpectancyEarth();
    $('#lifeEarth').text(userLifeEarth);
    let userLifeMercury= userAge.lifeExpectancyMercury();
    $('#lifeMercury').text(userLifeMercury);
    let userLifeVenus= userAge.lifeExpectancyVenus();
    $('#lifeVenus').text(userLifeVenus);
    let userLifeMars = userAge.lifeExpectancyMars();
    $('#lifeMars').text(userLifeMars);
    let userLifeJupiter = userAge.lifeLeftJupiter();
    $('#lifeJupiter').text(userLifeJupiter);

    let userTimeEarth = userAge.lifeLeftEarth();
    $('#timeEarth').text(userTimeEarth);
    let userTimeMercury = userAge.lifeLeftMercury();
    $('#timeMercury').text(userTimeMercury);
    let userTimeVenus = userAge.lifeLeftVenus();
    $('#timeVenus').text(userTimeVenus);
    let userTimeMars = userAge.lifeLeftMars();
    $('#timeMars').text(userTimeMars);
    let userTimeJupiter = userAge.lifeLeftJupiter();
    $('#timeJupiter').text(userTimeJupiter);

    $('#results').show();
  });

  $("#resetButton").click(function(){
      $("#results").hide();

    });
});
