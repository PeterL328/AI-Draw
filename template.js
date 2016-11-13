//jscs:disable
var img;  // Declare variable 'img'.
var pop_size = 50;
var mutation_rate = 0.01;
var population;
var mating_pool;

var pic1;
var pic2;

var counter = 0;
//Preload the pictures
// function preload(){
//   pic1 = loadImage("assets/peter.jpg");
// }

function setup() {
  createCanvas(300, 900);
  pic1 = loadImage("assets/peter.jpg");

  population = new Array();

  for (var i = 0; i < pop_size; i++) {
    population.push(new DNA());
  }
  console.log("finished setting up");
}

function draw() {
  debugger;
  // Displays the image at its actual size at point (0,0)
  image(pic1, 0, 0);

  //start drawing the circles
  //for (var i = 0; i < population.length; i++){
  console.log(population[counter]);
  for (var i = 0; i < pop_size; i++) {
    clear();
    for (var k = 0; k < population[counter].gene.length; k+=7){
      //values for RGB
      var red = population[counter].gene[k];
      var green = population[counter].gene[k+1];
      var blue = population[counter].gene[k+2];
      //x, y and diameter
      var x = population[counter].gene[k+4];
      var y = population[counter].gene[k+5];
      var diameter = population[counter].gene[k+6] * 2;

      fill(red, green, blue);
      noStroke();
      ellipse(x, y, diameter, diameter);
    }
    console.log("y value "+ population[counter].gene[7+5]);
    population[i].calcFitness(300, 600);
  }
  //console.log("population array: ");
  //console.log(population);

  // Mating pool
  mating_pool = new Array();
  for (var i = 0; i < pop_size; i++) {
    var n = (population[i].fitness);
    // console.log(n);
    for (var j = 0; j < n; j++) {
      mating_pool.push(population[i]);
    }
  }
  // Reproduction
  //console.log("mating pool array: ");
  //console.log(mating_pool);
  for (var i = 0; i < pop_size; i++) {
    // debugger;
    var a = Math.floor(Math.random()*(mating_pool.length));
    var b = Math.floor(Math.random()*(mating_pool.length));
    var partnerA = mating_pool[a];
    var partnerB = mating_pool[b];
    if (!partnerA || !partnerB) {
      //debugger;
    }
    // Crossover
    var child = partnerA.crossover(partnerB);
    // Mutate
    child.mutate(mutation_rate);
    // Add child to population
    population[i] = child;
  }
  //console.log("exiting reproduction");
}
