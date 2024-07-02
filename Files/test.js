console.log("si ves esto el programador no hizo bien su trabajo");

function pickRandom(max) {
  return Math.floor(Math.random() * max);
}
function getDeathScreenPhrase() {
  const phrases = [
    "Mmm... ese es todo tu poder?",
    "Ya veo, ese es tu límite...",
    "Ni siquiera puedo sentir lastima",
    "Tu destino ya no te pertenece",
    "Genial, ahora de nuevo...",
    "Tu padre estaría decepcionado",
    "Eso es todo lo que puedes hacer?",
    "Lo harás una y mil veces y fallarás en todas",
    "Ve y dile a tu padre que crio un perdedor",
    "ya no puedo ni mirarte, no lo mereces",
    "El frío toque de la muerte...",
    "Puedo sentir como tu cuerpo se pone frío... Me gusta",
    "Yo te advertí de que era imposible, no escuchaste",
    "Tu destino se te escapa de tu manos... ",
    "Eres un fracaso",
    "Al final todos nos quedamos sin tiempo...",
    "Eres un ser de vida inferior... solo rindete",
    "Fuiste advertido de este final",
    "Los dos sabíamos que esto acabaría así",
    "Al final solo eres polvo...",
  ];
  return phrases[pickRandom(phrases.length)];
}
