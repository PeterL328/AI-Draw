// jscs:disable
class DNA {

  constructor() {
    this.gene = [];
    this.fitness = 0;

    this.length = 7*100;

    for (var i = 0; i < this.length; i++) {
      //order:
      // R G B alpha x y radius

      // for RGB Values
      if (i%7 == 0 || i%7 == 1 || i%7 == 2 ) {
        this.gene[i] = Math.floor(Math.random() * (255 - 0 + 1));
      } else if (i%7 == 3) {
        // alpha value
        this.gene[i] = Math.random();
      } else  {
        // x y and radius
        this.gene[i] = Math.floor(Math.random() * (200 - 0 + 1));
      }
    }
    debugger;
  }

  calcFitness() {
    this.fitness = 0.01;
  }

  crossover(partner) {
    var child = this;
    for (var i = 0; i < this.length/2; i++) {
      child.gene[i] = partner.gene[i];
    }
    return child;
  }

  mutate(){
    var mutationRate = 0.01;

    for (var i = 0; i < this.gene.length; i++){

      if (random(1) < mutationRate){
        if (i%7 == 0 || i%7 == 1 || i%7 == 2 ) {
          this.gene[i] = Math.floor(Math.random() * (255 - 0 + 1));
        } else if (i%7 == 3) {
          this.gene[i] = Math.random();
        } else  {
          this.gene[i] = Math.floor(Math.random() * (200 - 0 + 1));
        }
      }

    }
  }


}
