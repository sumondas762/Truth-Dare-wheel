function spin() {
  const wheel = document.getElementById("wheel");

  // Add a random rotation between 2000 and 6000 degrees
  const randomSpin = Math.floor(Math.random() * 4000) + 2000;

  wheel.style.transform = `rotate(${randomSpin}deg)`;
}

function showName() {
    let name = document.getElementById("nameInput").value;

    document.getElementById
}
