// jscs:disable
class DNA {
  constructor() {
    this.genes = [];
    this.fitness = 0;

    this.length = 3*100;

    for (var i = 0; i < this.length; i++) {
      //change this later
      gene[i] = Math.random()*100;
    }
  }

  static fitness() {
    return 0.01;
  }

  static crossover(partner) {

  }

  static mutate(){

  }
}
