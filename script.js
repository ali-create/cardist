"use strict";
const pointGain = document.querySelector(".pointGain");
const pointLose = document.querySelector(".pointLose");
const useFail = document.querySelector(".useFail");
const darkMode = document.querySelector(".darkMode");
darkMode.addEventListener("click", function () {
  if (darkModeCheck) {
    document.documentElement.style.setProperty("--black", "black");
    document.documentElement.style.setProperty("--white", "white");
    darkModeCheck = !darkModeCheck;
  } else {
    document.documentElement.style.setProperty("--white", "black");
    document.documentElement.style.setProperty("--black", "white");
    darkModeCheck = !darkModeCheck;
  }
});
let darkModeCheck = darkMode.checked;
const volume = document.querySelector(".volume");
if (document.cookie.length > 1) {
  const data = document.cookie.split(" ");
  volume.value = data[1];
  pointLose.volume = volume.value / 100;
  pointGain.volume = volume.value / 100;
  useFail.volume = volume.value / 100;
  if (Boolean(data[0])) {
    darkMode.click();
  }
}

const random = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

const settingsInside = document.querySelector(".settingsInside");

let settingsOpen = false;

let playerCards = document.querySelectorAll(".card");
const board = document.querySelector(".board");
const sidePlayer = document.querySelector(".cardsPlayer");
const sideAI = document.querySelector(".cardsAI");
const winModal = document.querySelector(".win");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < 6; i++) {
  const randomFor = random(1, 9);
  const html2 = `<div class="card--AI" cardValue="${randomFor}">
<p class="cardValueText">${randomFor}</p>
<br />
</div>`;
  sideAI.insertAdjacentHTML("beforeend", html2);
}

volume.addEventListener("pointerup", function () {
  pointLose.volume = volume.value / 100;
  pointGain.volume = volume.value / 100;
  useFail.volume = volume.value / 100;
});

const checkForWin = function () {
  if (document.querySelectorAll(".card").length === 0) {
    winModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    winModal.childNodes[1].textContent = "You Lose";
    document.cookie = darkModeCheck + " " + volume.value;
  } else if (document.querySelectorAll(".card--AI").length === 0) {
    winModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    winModal.childNodes[1].textContent = "You Win";
    document.cookie = darkModeCheck + " " + volume.value;
  }
};

playerCards.forEach(function (cur) {
  cur.childNodes[3].textContent = cur.getAttribute("cardValue");
  // console.log((cur.childNodes[3].textContent = cur.getAttribute("cardValue")));
});

playerCards.forEach(function (cur) {
  cur.addEventListener("click", function () {
    if ((cur.disabled = true)) {
      useFail.load();
      useFail.play();
    }

    const AIcards = document.querySelectorAll(".card--AI");
    const cardNum = [];
    AIcards.forEach(function (cur) {
      cardNum.push(cur.getAttribute("cardValue"));
    });

    const curRandom = random(1, cardNum.length);
    // console.log(cardNum[curRandom - 1]);

    const AIchoice = cardNum[curRandom - 1];

    const html = `
    <div class="card boardCard" cardValue="${cur.getAttribute("cardValue")}">
        <p class="cardValueText">${cur.getAttribute("cardValue")}</p>
      </div>
      
    `;
    const htmlAI = `
    <div class="card boardCard" cardValue="${AIchoice}">
        <p class="cardValueText">${AIchoice}</p>
      </div>
     
    `;

    const losePoint = `
    <div class="card result boardCard">
    <p style='font-size: 20px; color: white'>
        You Lose 1 Card.
        </p>
      </div>`;

    const getPoint = `
      <div class="card result boardCard">
      <p style='font-size: 20px; color: white'>
          You Get 1 Card.
          </p>
        </div>`;

    const cardPlayer = function (ran) {
      return `<div class="card newCard" cardValue="${ran}">
  <button class="use useCard" onclick="test(this)" disabled="true" >Use Card</button>
  <p class="cardValueText">${ran}</p>
  <br />
  </div>`;
    };
    const cardAI = function (ran) {
      return `<div class="card--AI" cardValue="${ran}">
      <p class="cardValueText">${ran}</p>
    </div>`;
    };
    setTimeout(function () {
      board.insertAdjacentHTML("beforeEnd", htmlAI);
      if (AIchoice + 1 > cur.getAttribute("cardValue")) {
        board.insertAdjacentHTML("beforeEnd", losePoint);
        sideAI.insertAdjacentHTML("afterbegin", cardAI(random(1, 9)));
        document.querySelector(".result").style.backgroundColor = "red";
        pointLose.load();
        pointLose.play();
      } else if (AIchoice + 1 < cur.getAttribute("cardValue")) {
        board.insertAdjacentHTML("beforeEnd", getPoint);
        sidePlayer.insertAdjacentHTML("afterbegin", cardPlayer(random(1, 9)));

        playerCards = document.querySelectorAll(".card");
        document.querySelector(".result").style.backgroundColor = "green";
        pointGain.load();
        pointGain.play();
      }
    }, 1000);

    board.insertAdjacentHTML("afterbegin", html);
    document.querySelectorAll(".useCard").forEach(function (cur) {
      AIcards[curRandom - 1].style.borderColor = "red";
      cur.disabled = true;
    });
    setTimeout(function () {
      board.innerHTML = "";

      document.querySelectorAll(".useCard").forEach(function (cur) {
        cur.disabled = false;
      });
      // console.log(aiCards[curRandom]);
      AIcards[curRandom - 1].remove();

      checkForWin();
    }, 3000);
    // console.log(cur.getAttribute("cardValue"));
    cur.remove();
  });
});

///////////////////////////////////////////////////

const test = function (cur) {
  if ((cur.disabled = true)) {
    useFail.load();
    useFail.play();
  }

  // console.log(cur.parentNode);
  const AIcards = document.querySelectorAll(".card--AI");
  const cardNum = [];
  AIcards.forEach(function (cur) {
    cardNum.push(cur.getAttribute("cardValue"));
  });

  const curRandom = random(1, cardNum.length);
  // console.log(cardNum[curRandom - 1]);

  const AIchoice = cardNum[curRandom - 1];

  const html = `
  <div class="card boardCard" cardValue="${cur.parentNode.getAttribute(
    "cardValue"
  )}">
      <p class="cardValueText">${cur.parentNode.getAttribute("cardValue")}</p>
    </div>
    
  `;
  const htmlAI = `
  <div class="card boardCard" cardValue="${AIchoice}">
      <p class="cardValueText">${AIchoice}</p>
    </div>
   
  `;

  const losePoint = `
  <div class="card result boardCard">
  <p style='font-size: 20px; color: white'>
      You Lose 1 Card.
      </p>
    </div>`;

  const getPoint = `
    <div class="card result boardCard">
    <p style='font-size: 20px; color: white'>
        You Get 1 Card.
        </p>
      </div>`;

  const cardPlayer = function (ran) {
    return `<div class="card newCard" cardValue="${ran}">
  <button class="use useCard" onclick="test(this)" disabled="true" >Use Card</button>
  <p class="cardValueText">${ran}</p>
  <br />
  </div>`;
  };
  const cardAI = function (ran) {
    return `<div class="card--AI" cardValue="${ran}">
    <p class="cardValueText">${ran}</p>
  </div>`;
  };
  setTimeout(function () {
    board.insertAdjacentHTML("beforeEnd", htmlAI);
    if (AIchoice + 1 > cur.parentNode.getAttribute("cardValue")) {
      board.insertAdjacentHTML("beforeEnd", losePoint);
      sideAI.insertAdjacentHTML("afterbegin", cardAI(random(1, 9)));
      document.querySelector(".result").style.backgroundColor = "red";
      pointLose.load();
      pointLose.play();
    } else if (AIchoice + 1 < cur.parentNode.getAttribute("cardValue")) {
      board.insertAdjacentHTML("beforeEnd", getPoint);
      sidePlayer.insertAdjacentHTML("afterbegin", cardPlayer(random(1, 9)));

      playerCards = document.querySelectorAll(".card");
      document.querySelector(".result").style.backgroundColor = "green";
      pointGain.load();
      pointGain.play();
    }
  }, 1000);

  board.insertAdjacentHTML("afterbegin", html);
  document.querySelectorAll(".useCard").forEach(function (cur) {
    AIcards[curRandom - 1].style.borderColor = "red";
    cur.disabled = true;
  });
  setTimeout(function () {
    board.innerHTML = "";

    document.querySelectorAll(".useCard").forEach(function (cur) {
      cur.disabled = false;
    });
    // console.log(aiCards[curRandom]);
    AIcards[curRandom - 1].remove();
    checkForWin();
  }, 3000);
  // console.log(cur.getAttribute("cardValue"));
  cur.parentNode.remove();
};

const settingsbtn = document.querySelector(".openSettings");

settingsbtn.classList.toggle("notransition");
settingsbtn.addEventListener("click", function () {
  settingsbtn.classList.toggle("notransition");
  settingsInside.classList.toggle("hidden");
});

document.querySelector(".openSettings").click();

playerCards.forEach(function (cur) {
  cur.setAttribute("cardValue", random(1, 9));
});

playerCards.forEach(function (cur) {
  cur.childNodes[3].textContent = cur.getAttribute("cardValue");
});
