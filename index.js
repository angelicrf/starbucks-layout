let isClicked = false;
let isHMenuToggled = false;
let isChangedMenu = false;
const mdContainerFour = document.querySelector(".mb_container_four");
const mdContainerTwo = document.querySelector(".mb_container_two");
const mdContainerFive = document.querySelector(".mb_container_five");
const mdContainerSix = document.querySelector(".mb_container_six");
const footerLisOne = document.querySelectorAll(".footer_col_1>li>a");
const footerLisTwo = document.querySelectorAll(".footer_col_2>li>a");
const footerLisThree = document.querySelectorAll(".footer_col_3>li>a");
const footerLisFour = document.querySelectorAll(".footer_col_4>li>a");
const footerLisFive = document.querySelectorAll(".footer_col_5>li>a");
const hmbOne = document.querySelector(".hm_1");
const hmbTwo = document.querySelector(".hm_2");
const hmbThree = document.querySelector(".hm_3");
const mainHmb = document.querySelector(".section_three");
const menuIcon = document.querySelector(".menu-icon");
const mainHmCopy = document.querySelector(".secThreeCopy");
const menuIconCopy = document.querySelector(".mnIconCopy");
const hmLineCopy = document.querySelector(".hmLinecopy");
const dropdownMenu = document.querySelector(".dropdown_menu");

var rf,
  df,
  gf,
  hf,
  jf = [];
const rowEffectScreenSize = () => {
  if (screen.width == 1040 || screen.width > 1040) {
    mdContainerTwo.classList.add("row");
    mdContainerFour.classList.add("row");
    mdContainerFive.classList.add("row");
    mdContainerSix.classList.add("row");
  }
  if (screen.width == 365 || (screen.width > 360 && screen.width < 1039)) {
    if (
      mdContainerTwo.classList.contains("row") ||
      mdContainerFour.classList.contains("row") ||
      mdContainerFive.classList.contains("row") ||
      mdContainerSix.classList.contains("row")
    ) {
      mdContainerTwo.classList.remove("row");
      mdContainerFour.classList.remove("row");
      mdContainerFive.classList.remove("row");
      mdContainerSix.classList.remove("row");
    }
  }
};
const hamburgerMenuEvent = () => {
  mainHmb.addEventListener("click", () => {
    if (!isHMenuToggled && !isChangedMenu) {
      dropdownMenu.style.mozTransform = "translateX(260px)";
      dropdownMenu.style.oTransform = "translateX(260px)";
      dropdownMenu.style.webkitTransform = "translateX(260px)";
      dropdownMenu.style.display = "block";
      setTimeout(() => {
        dropdownMenu.style.MozTransition = "0.25s ease-in-out";
        dropdownMenu.style.mozTransform = "translateX(-5px)";
        dropdownMenu.style.oTransform = "translateX(-5px)";
        dropdownMenu.style.webkitTransform = "translateX(-5px)";
        hmbTwo.style.display = "none";
        hmbOne.style.marginTop = "26px";

        hmbOne.style.width = "50px";
        hmbThree.style.webkitTransform = "rotate(45deg)";
        hmbThree.style.oTransform = "rotate(45deg)";
        hmbThree.style.mozTransform = "rotate(45deg)";
        hmbOne.style.webkitTransform = "rotate(-45deg)";
        hmbOne.style.oTransform = "rotate(-45deg)";
        hmbOne.style.mozTransform = "rotate(-45deg)";
        menuIcon.style.marginBottom = "0";
        hmbThree.style.marginBottom = "26px";
        hmbThree.style.width = "50px";

        mainHmb.style.height = "50px";
        mainHmb.style.lineHeight = "0.5";

        isHMenuToggled = true;
        isChangedMenu = true;
      }, 600);
    } else if (isHMenuToggled) {
      //remove menu
      dropdownMenu.style.mozTransform = "translateX(260px)";
      dropdownMenu.style.oTransform = "translateX(260px)";
      dropdownMenu.style.webkitTransform = "translateX(260px)";
      mainHmb.style.display = "none";
      mainHmCopy.style.display = "flex";
      isHMenuToggled = false;
      isChangedMenu = true;
      mainHmCopy.classList.toggle(".secThreeCopy");
    }
  });
  mainHmCopy.addEventListener("click", () => {
    if (!isHMenuToggled && isChangedMenu) {
      //display menu and block
      dropdownMenu.style.mozTransform = "translateX(-5px)";
      dropdownMenu.style.oTransform = "translateX(-5px)";
      dropdownMenu.style.webkitTransform = "translateX(-5px)";
      mainHmb.style.display = "flex";
      mainHmCopy.style.display = "none";
      isHMenuToggled = true;
    }
  });
};
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
hamburgerMenuEvent();
rowEffectScreenSize();
