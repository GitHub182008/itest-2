class Player {
  constructor(){
    this.index = null;
    this.age = 0;
    this.isGlass = false 
    this.name = null;
    
  }

  getCount(){
    var testerCountRef = database.ref('testerCount');
    testerCountRef.on("value",(data)=>{
      testerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      testerCount: count
    });
  }

  update(){
    var testerIndex = "testers/tester" + this.index;
    database.ref(testerIndex).set({
      name:this.name,
      age:this.age,
      isGlass:this.isGlass,
    });
  }

  static getTesterInfo(){
    var testerInfoRef = database.ref('testers');
    testerInfoRef.on("value",(data)=>{
      allTesters = data.val();
    })
  }
}
