class Mango {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.5
      }
      this.body = Bodies.circle(x,y,radius/2, options);
      this.x=x
      this.y=y
      this.radius= radius
      this.image=loadImage("Plucking mangoes/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("purple");
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  };