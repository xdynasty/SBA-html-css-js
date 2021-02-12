$(() => {
  axios
    .get('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': '6df09632-bda7-4030-8ea3-b9f5fa20420e',
      },
    })
    .then(({ data }) => {
      console.log(data);
      data.forEach((dog) => {
        let dogEle = $('<div class="dog-container"></div>').appendTo('.main');
      });
    });
});
