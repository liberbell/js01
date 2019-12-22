const IMAGES = document.querySelectorAll("img");
const SIZES = {
  showcase: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
};

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
    width +=400;
  }
  return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0, -8);
  let srcset = makeSrcset(imgSrc);
  console.log(srcset);

  let type = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES.type;
  console.log(type);
}
