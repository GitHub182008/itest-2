class Form {

  constructor() {
    this.input = createInput("Name");
    this.age = createInput("Age");
    this.glass = createRadio("do you wear a glass?");

    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.age.hide();
    this.glass.hide();
  }

  display(){
    this.title.html("Eye Test Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.glass.html("do you wear a glass?")
    this.glass.option("yes");
    this.glass.option("no");
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.age.position(displayWidth/2 - 40, displayHeight/ 2 - 57);
    this.glass.position(displayWidth/2 - 40, displayHeight/ 2 - 35);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.glass.hide();
      this.age.hide();
      player.name = this.input.value();
      player.age = this.age.value();
      player.isGlass = this.glass.value();
      testerCount+=1;
      player.index = testerCount;
      player.update();
      player.updateCount(testerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
