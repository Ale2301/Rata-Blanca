const runtimeTemp = cr_createRuntime("c2canvas");
let updatedRuntime = false;
function testShoot(keyPressed, instance) {
  updatedRuntime = cr_getC2Runtime(runtimeTemp);
  let bulletInstance = updatedRuntime.getObjectByUID(instance);
  let arrow =
    keyPressed == 37
      ? (bulletInstance.angle = 180)
      : keyPressed == 38
      ? (bulletInstance.angle = 90)
      : keyPressed == 39
      ? (bulletInstance.angle = 0)
      : (bulletInstance.angle = 270);
}

function test(vel) {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      vel = vel + 100;
    }, 600);
  }
}
