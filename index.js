let isClicked = false;
const footerLisOne = document.querySelectorAll(".footer_col_1>li>a");
const footerLisTwo = document.querySelectorAll(".footer_col_2>li>a");
const footerLisThree = document.querySelectorAll(".footer_col_3>li>a");
const footerLisFour = document.querySelectorAll(".footer_col_4>li>a");
const footerLisFive = document.querySelectorAll(".footer_col_5>li>a");
var rf,
  df,
  gf,
  hf,
  jf = [];
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
const addClassesToLis = (thisClass, newClass) => {
  thisClass.forEach((thisList) => {
    thisList.classList.add(newClass);
  });
};
function loopOnNewClass(thisIndex, thisArray, thisNewClass, thisColor) {
  thisArray = document.getElementsByClassName(thisNewClass);
  console.log(thisArray);
  for (let index = 0; index < thisArray.length; index++) {
    thisArray[thisIndex].style.color = thisColor;
  }
  if (thisArray) {
    if (thisArray.length > 0) {
      thisArray.length = 0;
    }
  }
}
function callFooterLis() {
  addClassesToLis(footerLisOne, "newClassOne");
  loopOnNewClass(0, rf, "newClassOne", "red");
  addClassesToLis(footerLisTwo, "newClassTwo");
  loopOnNewClass(0, df, "newClassTwo", "blue");
  addClassesToLis(footerLisThree, "newClassThree");
  loopOnNewClass(0, gf, "newClassThree", "green");
  addClassesToLis(footerLisFour, "newClassFour");
  loopOnNewClass(0, hf, "newClassFour", "purple");
  addClassesToLis(footerLisFive, "newClassFive");
  loopOnNewClass(0, jf, "newClassFive", "lime");
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
