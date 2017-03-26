## AI-Draw


<div style="text-align:center">
<img src="http://www.petercollingridge.co.uk/sites/files/peter/charles_darwin%20and%20co.png" />
</div>

## Created by

<a href="https://github.com/peterl328">Yang(Peter) Leng</a></br>
<a href="https://github.com/yidingalan">Alan Yiding Wang</a></br>
<a href="https://github.com/patrick-wu">Patrick Wu</a></br>
<a href="https://github.com/zh5930">Leo Hao</a></br>

## Link
<a href="https://devpost.com/software/ai-draw">Devpost Link</a></br>

## What it does

The computer iteratively attempts to mimic an input pictures through drawing it with 100 circles of varying circle and radii, and continuously improve its accuracy based on a generic genetic algorithm

## How we built it

We followed 3 main steps that are common in genetic algorithms:
1. Create population of a generation
2. Use the current generation to breed a new generation. More accurately drawn individuals will be more likely to pass its traits down to its children
3. Children will occasionally experience mutations, which are randomly occuring changes to their DNA properties.

In our case, the DNA would be the coordinates and colors of all our circles.

The actual app itself is built with the P5 JavaScript framework, which is similar to the Processing language/environment.

## Challenges we ran into
The most challenging aspect was trying to optimize our fitness function, our cross-breeding function, as well as our mutation function, as the simulation takes a long time, and usually it is very difficult to get significant results in an hour. Thus, we had to be very careful in terms of when to test.

In the end, we were not able to get a visibly optimal solution, but we believe that with further optimizations, the algorithm should be able to produce better results.

## How to install& run it 
```
git clone https://github.com/PeterL328/AI-Draw.git
cd AI-Draw
python -m SimpleHTTPServer
```
This should start a server on port 8000 on your local machine.



