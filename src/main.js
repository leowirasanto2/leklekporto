// ── Footer year ───────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear()

// ── Nav scroll state ──────────────────────────────────────────
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20)
}, { passive: true })

// ── Scroll reveal (Intersection Observer) ────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

document.querySelectorAll('.js-reveal').forEach((el) => {
  revealObserver.observe(el)
})

// ── Stagger reveal for grids ──────────────────────────────────
document.querySelectorAll('.what-i-do__grid .discipline, .works__grid .work-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`
})
