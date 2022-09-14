
let funActive = false;

let circles = [];

function addCircle(c){
    let velMax = 12
    c.phys = {
        vel: {
            x: ((Math.random()*velMax)-(velMax/2)),
            y: ((Math.random()*velMax)-(velMax/2))
        }
    }
    circles.push(c);


    document.querySelector("#fun-cont").style.display = "inline-block"
}

document.querySelector("#fun-check").addEventListener("mousedown", (e) => {
    funActive = !e.target.checked;
})

function loop(){

    if(funActive){
        update()
    }

    window.requestAnimationFrame(loop)
}

function update(){
    circles.forEach((c,i) => {
        c.position.x += c.phys.vel.x;
        c.position.y += c.phys.vel.y;

        c.phys.vel.y += 0.5;

        if(c.position.x - c._radius <= 0 || c.position.x + c._radius >= 400){
            c.phys.vel.x *= -1;

            if(c.phys.vel.x > 0){
                c.position.x = 0 + c._radius + (c._radius/3)
            } else {
                c.position.x = 400 - c._radius - (c._radius/3)
            }

            c.phys.vel.x *= 0.95;
            
        }
        if(c.position.y - c._radius <= 0 || c.position.y + c._radius >= 400){
            c.phys.vel.y *= -1
            
            if(c.phys.vel.y > 0){
                c.position.y = 0 + c._radius + (c._radius/3)
            } else {
                c.position.y = 400 - c._radius - (c._radius/3)
            }
            c.phys.vel.y *= 0.95;

            if(Math.random() <= 0.05 && c._radius > 10){
                let r = c._radius
                c._radius = r/3;

                addCircle(Shape.Circle(c.position.x,c.position.y,r/3));
                addCircle(Shape.Circle(c.position.x,c.position.y,r/3));
                addCircle(Shape.Circle(c.position.x,c.position.y,r/3));

            }

        }

        let totalVel = Math.abs(c.phys.vel.y + c.phys.vel.x);
        c.fillColor = `rgb(${totalVel * 10},128,${Math.random()*120})`;

    })
}

function startLoop(){
    loop();
}

startLoop()