console.log("Bonjour");
function sample(){
  console.log("this is a sample of javascript")
}
sample();

var Cat = function (name) {
  this.name= name;
  this.run = function (){
    console.log(this.name + "が走る");
  };
};
var tama = new Cat('タマ');
tama.run();
console.log(tama.name);
