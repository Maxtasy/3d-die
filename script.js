const cube = document.querySelector('.Cube');
const inputs = document.querySelectorAll('.Input input');

const rotationAngles = {
  x: 0,
  y: 0,
  z: 0,
};

const updateRotations = (rotationAngles) => {
  const transformString = `translateZ(-100px) rotateX(${rotationAngles.x}deg) rotateY(${rotationAngles.y}deg) rotateZ(${rotationAngles.z}deg)`;
  cube.style.setProperty('--transform', transformString);
};

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const axis = input.getAttribute('data-axis');
    rotationAngles[axis] = input.value;
    updateRotations(rotationAngles);
  });
});
