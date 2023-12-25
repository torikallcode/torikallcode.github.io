// skills
// const skl1 = document.getElementById("skl1")
// const lg1 = document.getElementById("lg1")
// const grd1 = document.getElementById("grq1")
// skl1.addEventListener("mouseover" , function(){
//   skl1.classList.add("bg-hitam-0")
// })

// skl1.addEventListener("mouseout" , () => {
//   skl1.classList.remove("bg-hitam-0")
// })

// const home = document.getElementById("home")

// home.addEventListener("click" , function(){
//   alert("hallo")
// })

// Ambil semua elemen div dengan kelas 'flex'
const project1 = document.getElementById("projectSatu")
const project2 = document.getElementById("project2")

projectSatu.addEventListener("click" , function() {
alert("Project ini sedang dalam pengembangan")
})
let skills = document.querySelectorAll('.skills');

const svgColors = ['#e86229', '#2862e9', '#e8d44d', '#36b7f0', '#77c1d2','#00d1f7']
// Loop melalui setiap elemen div
skills.forEach((div ,index) => {
  // Tambahkan event listener untuk event 'mouseover'
  const svg = div.querySelector('svg')
  div.addEventListener('mouseover', function() {
    // Ambil elemen h1 dan h2 di dalam div
    const h1 = div.querySelector('h1');
    
    // Tambahkan style ketika div dihover
    h1.style.color = '#f4f4f4'; // Ubah warna teks h1 menjadi biru (contoh) // Ubah ketebalan font h2 menjadi tebal (contoh)
    div.style.backgroundColor = '#252525'
    svg.style.display = 'block'

    svg.style.fill = svgColors[index % svgColors.length];
  });
  
  // Tambahkan event listener untuk event 'mouseout' (ketika hover keluar dari div)
  div.addEventListener('mouseout', function() {
    // Ambil elemen h1 dan h2 di dalam div
    const h1 = div.querySelector('h1');
    const svg = div.querySelector('svg')
    
    // Hapus style yang ditambahkan saat hover keluar dari div
    h1.style.color = ''; // Kembalikan warna teks h1 ke default // Kembalikan ketebalan font h2 ke default
    div.style.backgroundColor = ''
    svg.style.display = ''
    svg.style.fill = 'rgba(37, 37, 37)';
  });
});

const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")
let navhehe = document.getElementById("navhehe")
const isiNav = document.getElementById("isiNav")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-active")
    if (isiNav.classList.contains('hidden')) {
        isiNav.classList.remove('hidden');
        setTimeout(() => {
          isiNav.classList.remove('opacity-0');
        }, 50);
      } else {
        isiNav.classList.add('opacity-0');
        setTimeout(() => {
          isiNav.classList.add('hidden');
        }, 500); // Sesuaikan dengan durasi transisi CSS
      }
})


const navbar = document.getElementById("nav")
let lastScrollY = window.scrollY;

window.addEventListener("scroll" , () => {
    if (lastScrollY < window.scrollY){
        navbar.classList.add("nav--hidden")
    } else {
        navbar.classList.remove("nav--hidden")
    }

    lastScrollY = window.scrollY
})

// Marquee
let currentScroll = 0
let isScrollingDown = true

let tween = WebGLSampler
.to(".marquee__part" , {
  xPercent: -100,
  repeat: -1,
  duration: 5,
  ease: "Linear"
})
.totalProgress(0.5)

function hideIsiNav() {
  var isiNav = document.getElementById("isiNav");
  isiNav.classList.add("hidden");
  hamburger.classList.toggle("hamburger-active")

}


