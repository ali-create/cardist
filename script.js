:root {
  --black: black;
  --white: white;
}

body {
  background-color: var(--white);
  color: var(--black);
}
.card,
.card--AI {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 10px;
  height: 150px;
  width: 100px;
  border: 3px var(--black) solid;
  border-radius: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
.use {
  width: 90px;
  border: 3px var(--black) solid;
  border-radius: 0.3rem;
  background-color: lime;
  cursor: pointer;

  transition: padding 0.5s, width 0.5s, font-size 0.5s, background-color 0.5s;
}
.use:hover {
  background-color: rgb(184, 255, 184);
  padding: 10px;
  width: 100px;
  font-size: 17px;
}
.cardsPlayer {
  width: 150px;
  height: 565px;
  overflow: auto;
  white-space: nowrap;
  padding: 10px 10px 10px 10px;
  border: 3px var(--black) solid;

  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
.cardValueText {
  font-size: 50px;
}
.board {
  margin-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 300px;
  height: 550px;
  position: absolute;

  left: 50%;
  border: 3px var(--black) solid;
  border-radius: 1rem;
  transform: translate(-50%, -100%);
}
.cardsAI {
  width: 150px;
  height: 565px;
  overflow: auto;
  white-space: nowrap;
  padding: 10px 10px 10px 10px;
  border: 3px var(--black) solid;

  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  direction: rtl;
  left: 99.2%;
  position: absolute;
  transform: translate(-100%, -99.2%);
}
.win {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 90px;
  left: 50%;
  top: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border: 3px var(--black) solid;
  border-radius: 1rem;
  z-index: 3;
}
.win p {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.win a {
  cursor: pointer;
}
.hidden {
  visibility: hidden;
}
.overlay {
  width: 5000px;
  height: 5000px;
  position: fixed;
  z-index: 2;
}
.settingsInside {
  z-index: 4;
  background-color: var(--white);
  top: 40px;
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  font-size: 20px;
  left: 190px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--white);
  border: var(--black) 3px solid;
  border-radius: 1rem;
  padding: 10px 10px 10px 10px;
  height: fit-content;
}
.summary {
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  font-size: 20px;
  left: 190px;
}

.volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: var(--white);
  cursor: pointer;
  border-radius: 50%;
  border: 3px var(--black) solid;
}
.volume {
  appearance: none;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 1rem;

  background-color: var(--black);
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.notransition {
  animation: rotation 2s infinite linear;
}
