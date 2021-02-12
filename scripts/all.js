$(() => {
  axios
    .get('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': '6df09632-bda7-4030-8ea3-b9f5fa20420e',
      },
    })
    .then(({ data }) => {
      data.forEach((dog) => {
        let dogContainerEle = $('<div class="dog-container"></div>').appendTo(
          '.main'
        );
        let dogNameEle = $('<h2>').text(dog.name).appendTo(dogContainerEle);
        let dogImgEle = $('<img>');
        dogImgEle.attr('src', dog.image.url);
        dogImgEle.attr('alt', dog.name);
        dogImgEle.appendTo(dogContainerEle);
        let factsContainerEle = $(
          '<div class="facts-container"></div>'
        ).appendTo(dogContainerEle);
        let bredForContainerEle = $('<div class="fact-container">').appendTo(
          factsContainerEle
        );
        let bredForEle = $('<div>Bred For:</div>').appendTo(
          bredForContainerEle
        );
        let bredForFactEle = $('<div>')
          .text(dog.bred_for)
          .appendTo(bredForContainerEle);
        let breedGroupContainerEle = $('<div class="fact-container">').appendTo(
          factsContainerEle
        );
        let breedGroupEle = $('<div>Breed Group:</div>').appendTo(
          breedGroupContainerEle
        );
        let breedGroupFactEle = $('<div>')
          .text(dog.breed_group)
          .appendTo(breedGroupContainerEle);
        let heightContainerEle = $('<div class="fact-container">').appendTo(
          factsContainerEle
        );
        let heightEle = $('<div>Height:</div>').appendTo(heightContainerEle);
        let heightFactEle = $('<div>')
          .text(dog.height.imperial)
          .appendTo(heightContainerEle);
        let lifespanContainerEle = $('<div class="fact-container">').appendTo(
          factsContainerEle
        );
        let lifespanEle = $('<div>Height:</div>').appendTo(
          lifespanContainerEle
        );
        let lifespanFactEle = $('<div>')
          .text(dog.life_span)
          .appendTo(lifespanContainerEle);
        let temperamentContainerEle = $(
          '<div class="fact-container">'
        ).appendTo(factsContainerEle);
        let temperamentEle = $('<div>Temperament:</div>').appendTo(
          temperamentContainerEle
        );
        let temperamentFactEle = $('<div>')
          .text(dog.temperament)
          .appendTo(temperamentContainerEle);
      });
    });
});
