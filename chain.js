class launcher{
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            stiffness:0.04,
            length:1
        }
        this.bodyA=body
        this.pointB=anchor
        this.body1=Constraint.create(options)
        World.add(world,this.body1)
    }

    attach(){
        this.body1.bodyA=body
    }

    fly(){
        this.body1.bodyA=null
    }

    

    display(){
        if(this.body1.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB

            strokeWeight(2)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
     
        }
    }
