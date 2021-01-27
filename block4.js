class Card {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.visibilty=255;
      this.width = width;
      this.height = height;
      this.fill="white";
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       push();
      if(this.body.speed>3){
        World.remove(world,this.body);
        this.visibilty=this.visibility-5;
        tint(255,this.visibilty);
        
      }
      else{
        
        //World.remove(world,this.body);
       // push();
       
      
     // pop();
      
    
      rectMode(CENTER);
      fill(" white");
      
      rect(pos.x, pos.y, this.width, this.height);
      }
       pop();
    }
    async  getTime(){
      var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
       var responsejson= await response.json();
       var dt=responsejson.datetime;
       var hour1=dt.slice(11,13);
       if(hour1>=06 &&  hour1<=14){
         this.fill="red";
       }
    }
  }
