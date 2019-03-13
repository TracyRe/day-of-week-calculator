import $ from 'jquery';
import "./css/styles.css";
import { dayOfWeek } from "./js/day-week.js";


$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();
    const userDate = $("#user-input").val();
    const date1 = new Date(userDate);
    const dayNum = date1.getUTCDay();  // number of day 0 - 6
    const day = dayOfWeek(dayNum);


    let resultString = `${userDate} is a ${day}.`


    $(".result").text(resultString);
  })
});
