$(() => {
  let searchInput = document.getElementById('searchInput');
  let searchQuery = searchInput.value;

  let searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
  });
});
