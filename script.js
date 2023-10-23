var typed = new Typed(".multiple-text", {
  strings: ["a Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

// Membuat objek dengan persentase untuk masing-masing keterampilan
const skillPercentages = {
  "HTML & CSS": 90,
  C: 85,
  Java: 70,
  "Web Design": 90,
};

// // Ambil semua elemen dengan kelas "circular-progress" pada halaman
// let circularProgressBars = document.querySelectorAll(".circular-progress");

// // Loop melalui setiap elemen dan atur persentase masing-masing
// circularProgressBars.forEach((circularProgress) => {
//   const text = circularProgress.nextElementSibling.textContent.trim(); // Ambil teks dari elemen berikutnya

//   let progressValue = circularProgress.querySelector(".progress-value");

//   let progressStartValue = 0;
//   let progressEndValue = skillPercentages[text]; // Ambil persentase dari objek skillPercentages
//   let speed = 100;

//   let progress = setInterval(() => {
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`;
//     circularProgress.style.background = `conic-gradient(orange ${
//       progressStartValue * 3.6
//     }deg, #ededed 0deg)`;

//     if (progressStartValue === progressEndValue) {
//       clearInterval(progress);
//     }
//   }, speed);
// });

// Ambil semua elemen dengan kelas "circular-progress" pada halaman
let circularProgressBars = document.querySelectorAll(".circular-progress");

function updateSkillProgress(circularProgress, startValue, endValue, speed) {
  let progressValue = circularProgress.querySelector(".progress-value");

  let progress = setInterval(() => {
    startValue++;

    progressValue.textContent = `${startValue}%`;
    circularProgress.style.background = `conic-gradient(orange ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue === endValue) {
      clearInterval(progress);
      setTimeout(() => {
        // Setelah selesai, ulangi dengan nilai awal
        updateSkillProgress(circularProgress, 0, endValue, speed);
      }, 5000); // Tunggu 10 detik sebelum memulai ulang
    }
  }, speed);
}

// Loop melalui setiap elemen dan atur persentase masing-masing
circularProgressBars.forEach((circularProgress) => {
  const text = circularProgress.nextElementSibling.textContent.trim(); // Ambil teks dari elemen berikutnya

  let progressEndValue = skillPercentages[text]; // Ambil persentase dari objek skillPercentages
  let speed = 100;

  // Mulai perbarui persentase
  updateSkillProgress(circularProgress, 0, progressEndValue, speed);
});

// Modal dialog
function createPopUp(id) {
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector(".overlay");
  let closeBtn = popupNode.querySelector(".btn-close");
  function openPopup() {
    popupNode.classList.add("active");
  }
  function closePopup() {
    popupNode.classList.remove("active");
  }
  overlay.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);
  return openPopup;
}

let popups = document.querySelectorAll(".open-popup");

popups.forEach(function (popupButton) {
  popupButton.addEventListener("click", function () {
    let popupId = popupButton.getAttribute("data-popup");
    let popup = createPopUp("#" + popupId);
    popup();
  });
});

// Contact Validation
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var subjectError = document.getElementById("subjectError");
  var messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  if (name === "") {
    nameError.textContent = "Please enter your name";
    return false;
  }

  if (email === "") {
    emailError.textContent = "Please enter your email";
    return false;
  }

  if (subject === "") {
    subjectError.textContent = "Please enter the subject";
    return false;
  }

  if (message === "") {
    messageError.textContent = "Please enter your message";
    return false;
  }

  return true;
}
