class Cons{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.5,
            length : 100
        }
        this.cons=Constraint.create(options)
         this.pointB=pointB
        World.add(world,this.cons)
    }
    display(){
        if(this.cons.bodyA){
        push()
        strokeWeight(4)
        line(this.cons.bodyA.position.x,this.cons.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop()
    }
    }
    dc(){
        this.cons.bodyA=null
    }
}