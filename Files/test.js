console.log("si ves esto el programador no hizo bien su trabajo");
function randomNumberGen() {
  let runtime = cr_createRuntime;
  runtime = cr_getC2Runtime(runtime);
  console.log("testing number...");
  let tempNumber;
  let enemyMovingNow = runtime.all_global_vars.find(
    (e) => e.name === "randomEnemyMove"
  );
  do {
    tempNumber = Math.round(Math.random() * 3);
  } while (tempNumber === enemyMovingNow.data);
  enemyMovingNow.data = tempNumber;
}
