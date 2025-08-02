// Time Update
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime();

// Battery Status
navigator.getBattery().then(battery => {
  function updateBattery() {
    document.getElementById("battery").textContent = Math.round(battery.level * 100) + "%";
  }
  battery.addEventListener("levelchange", updateBattery);
  updateBattery();
});

// IP Fetch
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").textContent = data.ip;
  });

// Webcam Feed
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    document.getElementById("cam").srcObject = stream;
  })
  .catch(() => {
    document.getElementById("cam").style.display = "none";
  });
