class Rope {
    constructor(body1,body2,offsetX,offsetY,) {
        /*Bodies are interdependent on each other
        and ther constrained bodies are dependent on each other
 
        */
 
     var options = {
         bodyA: body1,
         bodyB: body2,
         pointB:{x:this.offsetX, y:this.offsetY},
         stiffness: 0.04,
         length: 10
             }
         
    } 
}
 
    