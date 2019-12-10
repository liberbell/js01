const CTAELEMENT = document.querySelector(".cta a");

if (CTAELEMENT.hasAttribute("target")) {
  console.log(CTAELEMENT.getAttribute("target"));
}

console.log( CTAELEMENT.attributes );
