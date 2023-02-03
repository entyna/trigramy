const renderer = new c2.Renderer(document.getElementById('c2'));
resize();

renderer.background('#cccccc');
let random = new c2.Random();


let world = new c2.World(new c2.Rect(0, 0, renderer.width, renderer.height));

for(let i=0; i<300; i++){
  let x = random.next(renderer.width);
  let y = renderer.height;
  let p = new c2.Particle(x, y);
  p.radius = random.next(1, 5);
  p.color = c2.Color.hsl(30);

  world.addParticle(p);
}

let collision = new c2.Collision();
world.addInteractionForce(collision);

let lineField3 = new c2.LineField(new c2.Line(0, renderer.height*0.3, renderer.width, renderer.height*0.3), 1.5);
world.addForce(lineField3);

let lineField2a = new c2.LineField(new c2.Line(0, renderer.height*0.6, renderer.width*0.4, renderer.height*0.6), 0.5);
world.addForce(lineField2a);

let lineField2b = new c2.LineField(new c2.Line(renderer.width*0.6, renderer.height*0.6, renderer.width, renderer.height*0.6), 0.5);
world.addForce(lineField2b);

let lineField1 = new c2.LineField(new c2.Line(0, renderer.height*0.9, renderer.width, renderer.height*0.9), 0.4);
world.addForce(lineField1);

renderer.draw(() => {
    renderer.clear();

    let time = renderer.frame * .01;

    world.update();

    for(let i=0; i<world.particles.length; i++){
      let p = world.particles[i];
      renderer.stroke('#333333');
      renderer.lineWidth(1);
      renderer.fill(p.color);
      renderer.circle(p.position.x, p.position.y, p.radius);
      renderer.lineWidth(2);
    //   renderer.point(p.position.x, p.position.y);
    }
});


window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth, parent.clientHeight);
}