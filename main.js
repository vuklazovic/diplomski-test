// Infinite horizontal scroll implementation
document.addEventListener('DOMContentLoaded', () => {
  const tilesContainer = document.getElementById('tilesContainer');
  const tiles = Array.from(tilesContainer.children);
  
  // Duplicate tiles for seamless infinite scroll
  tiles.forEach(tile => {
    const clone = tile.cloneNode(true);
    tilesContainer.appendChild(clone);
  });
  
  // Optional: Add mouse wheel horizontal scroll support
  tilesContainer.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      tilesContainer.scrollLeft += e.deltaY;
    }
  });
});
