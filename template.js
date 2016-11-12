//jscs:disable
var img;  // Declare variable 'img'.
var pop_size = 50;
var mutation_rate = 0.01;
var population;
var mating_pool;

var pic1;
var pic2;

//Preload the pictures
function preload(){
  pic1 = loadImage("assets/peter.jpg");
  pic2 = loadImage("assets/google.jpg");
}

// Sketch One
var sketch1 = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    image(pic1, 0, 0);
  };
};
//load it to div defined in html
new p5(sketch1, 'sketch1');

// Sketch Two
var sketch2 = function( p ) {
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    image(pic2, 0, 400);
  };
};
//load it to div defined in html
new p5(sketch2, 'sketch2');


function setup() {
  createCanvas(1500, 900);

  population = new Array();

  for (var i = 0; i < pop_size; i++) {
    population.push(new DNA());
  }
}

function draw() {
  // debugger;
  // Displays the image at its actual size at point (0,0)
  //image(pic1, 0, 0);
  //image(pic2, 300, 0);

  for (var i = 0; i < pop_size; i++) {
    population[i].calcFitness(300, 600);
  }

  // Mating pool
  mating_pool = new Array();
  for (var i = 0; i < pop_size; i++) {
    var n = Math.floor(population[i].fitness);
    for (var j = 0; j < n; j++) {
      mating_pool.push(population[i]);
    }
  }
  // Reproduction
  for (var i = 0; i < pop_size; i++) {
    var a = Math.floor(Math.random(mating_pool.length));
    var b = Math.floor(Math.random(mating_pool.length));
    var partnerA = mating_pool[a];
    var partnerB = mating_pool[b];
    // Crossover
    var child = partnerA.crossover(partnerB)
    // Mutate
    child.mutate(mutation_rate);
    // Add child to population
    population[i] = child;
  }
}
