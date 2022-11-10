import { Haiku } from '../src/js/haiku-checker.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// UI Logic

const handleSubmission = (event) => {
  event.preventDefault();
  let haikuText = document.getElementById("haiku").value;
  let haiku = new Haiku(haikuText);
  const isAHaiku = haiku.checkOurHaiku();
  if(isAHaiku){
    document.getElementById("response").innerText = "You have written a valid Haiku!";
  }
  else {
    document.getElementById("response").innerText = "You have not written a valid Haiku!";
  }
}

window.addEventListener("load", function () {
  document.getElementById("haiku-form").addEventListener("submit", handleSubmission);
})