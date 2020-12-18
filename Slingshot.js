class Slingshot{
    constructor(bodyA, pointB){
       //in bodyA we are storing polygon body
       //and on pointB we are storing the x and y position
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
    this.sling.bodyA = null;
    }

    attach(bodyA){
     this.sling.bodyA = bodyA;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    
}