let isClicked = false;
const footerLisOne = document.querySelectorAll(".footer_col_1>li>a");
const footerLisTwo = document.querySelectorAll(".footer_col_2>li>a");
const footerLisThree = document.querySelectorAll(".footer_col_3>li>a");
const footerLisFour = document.querySelectorAll(".footer_col_4>li>a");
const footerLisFive = document.querySelectorAll(".footer_col_5>li>a");
var rf = [];
const changeLisColor = (thisClass, thisEvent, thisColor) => {
  document.querySelectorAll(thisClass).forEach((item) => {
    item.addEventListener(thisEvent, function (event) {
      event.target.style.color = thisColor;
      if (
        event.target.nodeName.toLowerCase() == "button" &&
        thisEvent == "mouseout" &&
        isClicked
      ) {
        event.target.style.borderColor = "blue";
        event.target.style.boxShadow = "none";
        isClicked = false;
      }
      if (
        event.target.nodeName.toLowerCase() == "button" &&
        thisEvent == "mouseover" &&
        !isClicked
      ) {
        event.target.style.borderColor = "black";
        event.target.style.boxShadow = "none";
      }
    });
  });
};
const buttonsMsg = (thisClass, thisMsg) => {
  document.querySelector(thisClass).addEventListener("click", function () {
    isClicked = true;
    console.log(`the btn ${thisMsg} is clicked`);
  });
};
const addClassesToLis = (thisClass) => {
  thisClass.forEach((thisList) => {
    thisList.classList.add("newClass");
  });
};
function loopOnNewClass(thisIndex) {
  rf = document.getElementsByClassName("newClass");
  for (let index = 0; index < rf.length; index++) {
    rf[thisIndex].style.color = "red";
  }
  rf.length = 0;
}
function callFooterLis() {
  addClassesToLis(footerLisOne);
  loopOnNewClass(0);
  addClassesToLis(footerLisTwo);
  loopOnNewClass(6);
  addClassesToLis(footerLisThree);
  loopOnNewClass(13);
  addClassesToLis(footerLisFour);
  loopOnNewClass(17);
  addClassesToLis(footerLisFive);
  loopOnNewClass(21);
}
function changeBtnColors() {
  changeLisColor(".changeUl", "mouseover", "red");
  changeLisColor(".changeUl", "mouseover", "red");
  changeLisColor(".a-link-one", "mouseover", "red");
  changeLisColor(".secBut", "mouseover", "pink");
  changeLisColor(".thirdBut", "mouseover", "pink");
  changeLisColor(".fourthBut", "mouseover", "pink");
  changeLisColor(".fifthBut", "mouseover", "pink");
  changeLisColor(".sixthBut", "mouseover", "black");
  changeLisColor(".changeUl", "mouseout", "black");
  changeLisColor(".signIn", "mouseout", "purple");
  changeLisColor(".signOut", "mouseout", "pink");
  changeLisColor(".a-link-one", "mouseout", "white");
  changeLisColor(".secBut", "mouseout", "white");
  changeLisColor(".thirdBut", "mouseout", "white");
  changeLisColor(".fourthBut", "mouseout", "white");
  changeLisColor(".fifthBut", "mouseout", "white");
  changeLisColor(".sixthBut", "mouseout", "black");
}
function changeBtnBorders() {
  buttonsMsg(".secBut", "second-container");
  buttonsMsg(".thirdBut", "third-container");
  buttonsMsg(".fourthBut", "fourth-container");
  buttonsMsg(".fifthBut", "fifth-container");
  buttonsMsg(".sixthBut", "sixth-container");
}
changeBtnColors();
changeBtnBorders();
callFooterLis();
