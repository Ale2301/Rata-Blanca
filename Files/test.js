console.log("si ves esto el programador no hizo bien su trabajo");

function pickRandom(max) {
  return Math.floor(Math.random() * max);
}
function getDeathScreenPhrase() {
  const phrases = ["te moriste", "alto puto, te moriste"];
  return phrases[pickRandom(phrases.length)];
}
