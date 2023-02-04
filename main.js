let world;
let perlin = new c2.Perlin();
let xoff = 0.01; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL, 360, 100, 100);
    ellipseMode(RADIUS);

    world = new c2.World(new c2.Rect(0, 0, width, height));

    for(let i=0; i<100; i++){
        let x = map(noise(xoff), 0, 1, 0, width);
        let y = random(height);
        let p = new c2.Particle(x, y);
        p.radius = 2;
        p.color = color(0);

        world.addParticle(p);
    }

    let collision = new c2.Collision();
    world.addInteractionForce(collision);

    let lineField = new c2.LineField(new c2.Line(0, 0, width, height), );
    world.addForce(lineField);
}

function draw() {
    background('#cccccc');

    world.update();

    for(let i=0; i<world.particles.length; i++){
        let p = world.particles[i];
        stroke('#333333');
        // strokeWeight(1);
        fill(p.color);
        // circle(p.position.x, p.position.y, p.radius);
        strokeWeight(2);
        point(p.position.x, p.position.y);
    }

}