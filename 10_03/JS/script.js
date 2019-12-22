const IMAGES = document.querySelectorAll("img");

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg " + "w";
    width +=400;
  }
}

for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0, -8);
  console.log(imgSrc);

  let type = IMAGES[i].getAttribute("data-type");
  console.log(type);
}
