let isClicked = false;
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
        event.target.style.borderColor = "white";
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
function changeBtnColors() {
  changeLisColor(".changeUl", "mouseover", "red");
  changeLisColor(".changeUl", "mouseover", "red");
  changeLisColor(".a-link-one", "mouseover", "red");
  changeLisColor(".secBut", "mouseover", "pink");
  changeLisColor(".changeUl", "mouseout", "black");
  changeLisColor(".signIn", "mouseout", "purple");
  changeLisColor(".signOut", "mouseout", "pink");
  changeLisColor(".a-link-one", "mouseout", "white");
  changeLisColor(".secBut", "mouseout", "white");
}
changeBtnColors();
buttonsMsg(".secBut", "second-container");
