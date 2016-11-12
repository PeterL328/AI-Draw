//jscs:disable
var img;  // Declare variable 'img'.
var pop_size = 50;
var mutation_rate = 0.01;
img = loadImage('assets/peter.jpg');  // Load the image
var population;

function setup() {
  createCanvas(720, 400);
  image(img, 0, 0);

  population = new Array();

  for (var i = 0; i < pop_size; i++) {
    population.push(new DNA());
  }
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  for (var i = 0; i < pop_size; i++) {
    population[i].fitness();
  }
}


//
// void draw() {
//
//
// Step 2: Selection
//
//
//
// Step 2a: Calculate fitness.
//
//   for (int i = 0; i < population.length; i++) {
//     population[i].fitness();
//   }
//
//
// Step 2b: Build mating pool.
//
//   ArrayList<DNA> matingPool = new ArrayList<DNA>();
//
//   for (int i = 0; i < population.length; i++) {
//
// Add each member n times according to its fitness score.
//
//     int n = int(population[i].fitness * 100);
//     for (int j = 0; j < n; j++) {
//       matingPool.add(population[i]);
//     }
//
//   }
//
//
// Step 3: Reproduction
//
//   for (int i = 0; i < population.length; i++) {
//     int a = int(random(matingPool.size()));
//     int b = int(random(matingPool.size()));
//     DNA partnerA = matingPool.get(a);
//     DNA partnerB = matingPool.get(b);
//
// Step 3a: Crossover
//
//     DNA child = partnerA.crossover(partnerB);
//
// Step 3b: Mutation
//
//     child.mutate(mutationRate);
//
//
// Note that we are overwriting the population with the new children. When draw() loops, we will perform all the same steps with the new population of children.
//
//     population[i] = child;
//   }
// }
