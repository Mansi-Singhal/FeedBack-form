console.log("Welcome!!");

function clearErrors() {
  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateform() {
  var returnVal = true;
  clearErrors();
  var name = document.forms['feedbackform']['fname'].value;
  if (name.length < 3) {
    seterror('name', '*Input is too short!');
    returnVal = false;
  }

  var email = document.forms['feedbackform']['femail'].value;
  if (email.length > 20) {
    seterror('email', '*Your email address is too long!');
    returnVal = false;
  }

  var phone = document.forms['feedbackform']['fphone'].value;
  if (phone.length > 10) {
    seterror('phone', '*Please, give 10 digit number!');
    returnVal = false;
  }
  if (phone.length < 10) {
    seterror('phone', '*Please, check your number and give 10 digit number!');
    returnVal = false;
  }

  var describe = document.forms['feedbackform']['fdescribe'].value;
  if (name.length < 50) {
    seterror('describe', '*Write atleast 50 words!');
    returnVal = false;
  }
  return returnVal;
}
