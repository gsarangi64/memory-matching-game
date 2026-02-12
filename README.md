# Memory Matching Game

A browser-based memory card matching game built using HTML, CSS, and vanilla JavaScript.  
Players flip cards to find matching pairs while the game handles shuffling, match detection, win conditions, and reset functionality.

This project demonstrates DOM manipulation, game state management, and grid-based layout design without using external libraries or frameworks.

---

## Live Demo

(If deployed with GitHub Pages, add link here)

---

## Features

- Fisher–Yates shuffle algorithm for randomized gameplay
- Dynamic card flipping using JavaScript
- Match detection logic
- Win condition tracking
- Reset button functionality
- CSS Grid layout
- External validated CSS
- Semantic HTML structure

---

## Built With

- HTML5  
- CSS3 (Grid Layout)  
- JavaScript (ES6)

---

## Game Logic Overview

The game maintains three primary pieces of state:

- `flippedCards` – Tracks currently selected cards
- `matchedCards` – Stores successfully matched pairs
- `lockBoard` – Prevents interaction during evaluation

Cards are shuffled using the Fisher–Yates algorithm and assigned values using `data-*` attributes.  
When two cards are flipped:

- If values match → cards remain revealed and fade
- If values do not match → cards reset after a short delay
- When all cards are matched → win message is displayed

---

## Project Structure
memory-matching-game/
│
├── index.html
├── css/
│ ├── styles.css
├── js/
│ ├── script.js
├── images/
│ ├── CardBack.png
│ ├── Card1.png
│ ├── Card2.png
│ └── ...
└── README.md


---

## How to Run Locally

1. Clone the repository
2. Open `index.html` in your browser

No build tools or dependencies required.

---

## Future Improvements

- Add move counter
- Add timer
- Add difficulty adjusting with more cards
- Add animations/transitions
- Improve mobile responsiveness
- Add accessibility improvements (keyboard controls, ARIA roles)

---

## Author

Gaurav Sarangi  
© 2026