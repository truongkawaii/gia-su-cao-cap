import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Pro Max Animations ---

// 1. Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm", "bg-white/80", "backdrop-blur-xl");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("shadow-sm", "bg-white/80", "backdrop-blur-xl");
    navbar.classList.add("bg-transparent");
  }
});

// 2. Bento Grid Stagger
// 2. Bento Grid Stagger - Moved to CSS for stability
// GSAP Removed to prevent opacity: 0 lock

// 3. Stats Counter Animation
gsap.utils.toArray(".glass .text-transparent").forEach((stat) => {
  gsap.from(stat, {
    scrollTrigger: {
      trigger: stat,
      start: "top 85%",
    },
    textContent: 0,
    duration: 2,
    ease: "power1.out",
    snap: { textContent: 1 },
    stagger: 1,
  });
});

// 4. CSS Animation Trigger (Intersection Observer)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up");
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));
