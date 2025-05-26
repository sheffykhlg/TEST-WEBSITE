// Replace these with your actual Telegram file links
const movies = [
  {
    title: "Jawan (2023)",
    thumbnail: "https://via.placeholder.com/250x150?text=Jawan",
    telegramLink: "https://api.telegram.org/file/bot<YOUR_TOKEN>/<file_path>",
  },
  {
    title: "Animal (2023)",
    thumbnail: "https://via.placeholder.com/250x150?text=Animal",
    telegramLink: "https://api.telegram.org/file/bot<YOUR_TOKEN>/<file_path>",
  }
];

const container = document.getElementById('movies-container');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${movie.title}</h3>
    <img src="${movie.thumbnail}" alt="${movie.title}">
    <div>
      <a href="${movie.telegramLink}" target="_blank">
        <button class="watch">▶️ Watch</button>
      </a>
      <a href="${movie.telegramLink}" download>
        <button class="download">⬇️ Download</button>
      </a>
    </div>
  `;

  container.appendChild(card);
});
