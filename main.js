// Drag horizontal scroll implementation
document.addEventListener('DOMContentLoaded', () => {
  const tilesSection = document.querySelector('.tiles-section');
  const tilesContainer = document.getElementById('tilesContainer');
  const tiles = Array.from(tilesContainer.children);
  
  // Duplicate tiles for seamless infinite scroll
  tiles.forEach(tile => {
    const clone = tile.cloneNode(true);
    tilesContainer.appendChild(clone);
  });
  
  // Drag to scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  tilesSection.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - tilesSection.offsetLeft;
    scrollLeft = tilesSection.scrollLeft;
  });

  tilesSection.addEventListener('mouseleave', () => {
    isDown = false;
  });

  tilesSection.addEventListener('mouseup', () => {
    isDown = false;
  });

  tilesSection.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tilesSection.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    tilesSection.scrollLeft = scrollLeft - walk;
  });

  // Mouse wheel horizontal scroll support
  tilesSection.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      tilesSection.scrollLeft += e.deltaY;
    }
  });

  // Touch support for mobile
  let touchStartX = 0;
  let touchScrollLeft = 0;

  tilesSection.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX - tilesSection.offsetLeft;
    touchScrollLeft = tilesSection.scrollLeft;
  });

  tilesSection.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - tilesSection.offsetLeft;
    const walk = (x - touchStartX) * 2;
    tilesSection.scrollLeft = touchScrollLeft - walk;
  });
});
