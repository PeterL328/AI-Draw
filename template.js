//jscs:disable
var pop_size = 50;
var mutation_rate = 0.01;
var population;
var mating_pool;

var pic1;
var pic2;
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
  // Displays the image at its actual size at point (0,0)
  image(pic1, 0, 0);

  //start drawing the circles
  //for (var i = 0; i < population.length; i++){
  for (var i = 0; i < pop_size; i++) {
    clear();
    for (var k = 0; k < population[i].gene.length; k+=7){
      //values for RGB
      var red = population[i].gene[k];
      var green = population[i].gene[k+1];
      var blue = population[i].gene[k+2];
      var alpha = population[i].gene[k+3];
      //x, y and diameter
      var x = population[i].gene[k+4];
      var y = population[i].gene[k+5];
      var diameter = population[i].gene[k+6] * 2;

      var c = color('rgba('+red+  ','+ green + ',' + blue + ',' + alpha + ')');
      fill(c);
      noStroke();
      ellipse(x, y, diameter, diameter);
    }
    image(pic1, 0, 0);
    //console.log("y value "+ population[i].gene[7+5]);
    population[i].calcFitness(300, 600);
  }

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
