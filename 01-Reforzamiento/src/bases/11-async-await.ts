import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "4SO3cxxQ6OHlyKNukLqQdyPOK7eLZqYD";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imgUrl = data.images.original.url;

    // const datosImagen = datos.data.images.original.url;
    // console.log(datosImagen);

    const imagUrl = document.createElement("img");
    imagUrl.src = imgUrl;

    document.body.append(imagUrl);
  })
  .catch((err) => {
    console.error(err);
  });
 