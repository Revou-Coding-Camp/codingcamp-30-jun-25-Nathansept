console.log("Script executed successfully");

let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    slideTimer = setTimeout(showSlides, 10000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);         
    slideIndex = n - 1;               
    showSlides();                     
}

showSlides();

const form = document.getElementById('contact-form');
const result = document.getElementById('result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById('message').value;
    const waktu = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    });

    document.getElementById('time').textContent = waktu + " WIB";


    result.innerHTML = `
      <p><strong>Current time:</strong> ${waktu} WIB</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
  });