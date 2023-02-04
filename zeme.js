let world;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);

    world = new c2.World();

    let collision = new c2.Collision();
    world.addInteractionForce(collision);

    // let constForce = new c2.ConstForce(0, -1);
    // world.addForce(constForce);
    

    let yaoYinA = new c2.LineField(new c2.Line(width*0.25, height*0.25, width*0.4, height*0.25), 0.4);
    world.addForce(yaoYinA);
    // yaoYinA.range(0, 200);

    let yaoYinB = new c2.LineField(new c2.Line(width*0.6, height*0.25, width*0.75, height*0.25), 0.4);
    world.addForce(yaoYinB);
    // yaoYinB.range(0, 200);

    let yaoYin2A = new c2.LineField(new c2.Line(width*0.25, height*0.5, width*0.4, height*0.5), 0.4);
    world.addForce(yaoYin2A);
    // yaoYin2A.range(0, 200);

    let yaoYin2B = new c2.LineField(new c2.Line(width*0.6, height*0.5, width*0.75, height*0.5), 0.4);
    world.addForce(yaoYin2B);
    // yaoYin2B.range(0, 200);

    let yaoYin3A = new c2.LineField(new c2.Line(width*0.25, height*0.75, width*0.4, height*0.75), 0.4);
    world.addForce(yaoYin3A);
    // yaoYin3A.range(0, 200);

    let yaoYin3B = new c2.LineField(new c2.Line(width*0.6, height*0.75, width*0.75, height*0.75), 0.4);
    world.addForce(yaoYin3B);
    // yaoYin3B.range(0, 200);

    noLoop();
    setInterval(function() {
    redraw();
    }, 30);
}


function draw() {
   background(245, 20);

    for(let i=0; i<world.particles.length; i++){
        let p = world.particles[i];
        stroke('black');
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