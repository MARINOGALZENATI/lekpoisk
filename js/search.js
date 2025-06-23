
let currentLang = 'ru';

function toggleLanguage() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  renderProducts();
}


const medicines = [
  { name: 'Парацетамол', description: 'Обезболивающее и жаропонижающее.', image: 'images/paracetamol.jpg' },
  { name: 'Ибупрофен', description: 'Противовоспалительное средство.', image: 'images/ibuprofen.jpg' },
  { name: 'Амоксициллин', description: 'Антибиотик.', image: 'images/amoxicillin.jpg' }
];

function search() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = document.getElementById('results');
  results.innerHTML = '';
  const filtered = medicines.filter(m => m.name.toLowerCase().includes(query));
  filtered.forEach(m => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${m.name}</h3><p>${m.description}</p><img src='${m.image}' alt='${m.name}' width='100'>`;
    results.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', search);
});
