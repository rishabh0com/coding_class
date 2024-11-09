function execute(a, func) { // a = "hii", func = ab
  console.log(a);
  func();
}
execute("hii",ab);

function ab() { // callback function
  console.log("I am executed by execute function() ");
}
