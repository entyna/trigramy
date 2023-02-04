let world;
// let perlin = new c2.Perlin();

function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode(HSL, 360, 100, 100);
    ellipseMode(RADIUS);

    // world = new c2.World(new c2.Rect(0, 0, width, height));
    world = new c2.World();

    // for(let i=0; i<700; i++){
    //     let x = random(width);
    //     let y = random(height);
    //     let p = new c2.Particle(x, y);
    //     p.radius = 2;
    //     p.color = color(0);

    //     world.addParticle(p);
    // }

    let collision = new c2.Collision();
    world.addInteractionForce(collision);

    // let constForce = new c2.ConstForce(0, -0.1);
    // world.addForce(constForce);

    let lineField3a = new c2.LineField(new c2.Line(0, height*0.25, width, height*0.25), -1);
    world.addForce(lineField3a);

    let lineField2a = new c2.LineField(new c2.Line(width*0.2, height*0.5, width*0.4, height*0.5), 0.25);
    world.addForce(lineField2a);

    let lineField2b = new c2.LineField(new c2.Line(width*0.6, height*0.5, width*0.8, height*0.5), 0.25);
    world.addForce(lineField2b);

    let lineField1a = new c2.LineField(new c2.Line(width*0.2, height*0.75, width*0.4, height*0.75), 0.25);
    world.addForce(lineField1a);

    let lineField1b = new c2.LineField(new c2.Line(width*0.6, height*0.75, width*0.8, height*0.75), 0.25);
    world.addForce(lineField1b);


    noLoop();
    setInterval(function() {
    redraw();
    }, 30);
}


function draw() {
   background(240, 20);

    for(let i=0; i<world.particles.length; i++){
        let p = world.particles[i];
        stroke('#333333');
        fill(p.color);
        strokeWeight(2);
        point(p.position.x, p.position.y);

        if (world.particles.length > 1000) {
            world.particles.splice(0, world.particles.length - 1000);
        }
    }

    if(frameCount % 1 == 0) {
        for(let i=0; i<20; i++){
            let x = random(width);
            let y = random(height);
            let p = new c2.Particle(x, y);
            p.radius = 2;
            p.color = color(0);
    
            world.addParticle(p);
        }
    }

    world.update();

}