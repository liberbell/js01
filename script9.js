function logScope() {
  var localvar = 2;

  if (localvar) {
    var localvar = "I`m different!";
    console.log("nested localvar: ", localvar);
  }

  console.log("logScope localvar: ", localvar);
}

logScope();
