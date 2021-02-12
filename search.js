$(() => {
  let searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchInput.value.match(/[^a-z A-Z]/)) {
      console.log('invalid');
    } else {
      let searchQuery = searchInput.value;
      searchInput.value = '';
      console.log(searchQuery);
      axios
        .get(`https://api.thedogapi.com/v1/breeds/search?q=${searchQuery}`, {
          headers: {
            'x-api-key': '6df09632-bda7-4030-8ea3-b9f5fa20420e',
          },
        })
        .then(({ data }) => {
          console.log(data);
          let dogContainer = $('<div class="dogContainer">').appendTo(
            $('#results')
          );
          for (let dog of data) {
            $(`<h1>${dog.name}</h1>`).appendTo(dogContainer);

            let tableEle = $('<table class="table"></table>').appendTo(
              dogContainer
            );
            let tr1 = $('<tr></tr>').appendTo(tableEle);
            $('<th>Bred For</th>').appendTo(tr1);
            $(`<td>${dog.bred_for}</td>`).appendTo(tr1);
            let tr2 = $('<tr></tr>').appendTo(tableEle);
            $('<th>Breed Group</th>').appendTo(tr2);
            $(`<td>${dog.breed_group}</td>`).appendTo(tr2);
            let tr3 = $('<tr></tr>').appendTo(tableEle);
            $('<th>height</th>').appendTo(tr3);
            $(`<td>${dog.height.imperial}</td>`).appendTo(tr3);
            let tr4 = $('<tr></tr>').appendTo(tableEle);
            $('<th>Lifespan</th>').appendTo(tr4);
            $(`<td>${dog.life_span}</td>`).appendTo(tr4);
            let tr5 = $('<tr></tr>').appendTo(tableEle);
            $('<th>Temperament</th>').appendTo(tr5);
            $(`<td>${dog.temperament}</td>`).appendTo(tr5);
          }
        });
    }
    console.log('clicked');
  });
});
