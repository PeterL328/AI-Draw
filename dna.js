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

  calcFitness(width, height) {
    loadPixels();
    var d = pixelDensity();
    for (var i = 0; i < width*height*d*d*2; i+=4) {
      //get delta per color
      var deltaRed = pixels[i] - pixels[i+width*height*d*d*2];
      var deltaGreen = pixels[i+1] - pixels[i+1+width*height*d*d*2];
      var deltaBlue = pixels[i+2] - pixels[i+2+width*height*d*d*2];

      // measure the distance between the colors in 3D space
      var pixelFitness = deltaRed * deltaRed +
                         deltaGreen * deltaGreen +
                         deltaBlue * deltaBlue;

      //add the pixel fitness to the total fitness ( lower is better )
      this.fitness += pixelFitness;
    }
    this.fitness = 1/this.fitness;
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
