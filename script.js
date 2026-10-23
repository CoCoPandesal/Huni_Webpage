// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Dashboard bar chart
const data = [
  { day: 'Mon', value: 45 }, { day: 'Tue', value: 70 }, { day: 'Wed', value: 55 },
  { day: 'Thu', value: 85 }, { day: 'Fri', value: 65 }, { day: 'Sat', value: 40 }, { day: 'Sun', value: 30 }
];
const max = Math.max(...data.map(d => d.value));
document.getElementById('chart').innerHTML = data.map(d =>
  `<div class="bar"><div style="height:${(d.value / max) * 85}%" title="${d.value}"></div><span>${d.day}</span></div>`
).join('');

// Dates
document.getElementById('dashDate').textContent = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
document.getElementById('year').textContent = new Date().getFullYear();
