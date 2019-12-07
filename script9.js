function logScope() {
  let localvar = 2;

  if (localvar) {
    let localvar = "I`m different!";
    console.log("nested localvar: ", localvar);
  }

  console.log("logScope localvar: ", localvar);
}

logScope();
