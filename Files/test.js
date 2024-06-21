console.log("si ves esto el programador no hizo bien su trabajo");

const phrases = ["te moriste", "alto puto, te moriste"];
function pickRandom(max) {
  return Math.floor(Math.random() * max);
}
function getDeathScreenPhrase() {
  return phrases[pickRandom(phrases.length)];
}
