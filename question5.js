class Question5 {

    constructor() {
      this.title_5 = createElement('h1')
  
     // this.input_5 = createInput('Enter Correct Option No..');
     // this.button_5 = createButton('Submit');
      this.question_5 = createElement('h3');
      this.option1_5 = createElement('h4');
      this.option2_5 = createElement('h4');
      this.option3_5 = createElement('h4');
      this.option4_5 = createElement('h4');
      
      this.answer_5 = createElement('h3')
      
    }
  

hide(){
  this.title_5.hide();
  this.question_5.hide();
  this.option1_5.hide();
  this.option2_5.hide();
  this.option3_5.hide();
  this.option4_5.hide();
  this.answer_5.hide();
  this.button_5.hide();
  this.input_5.hide();
}

display(){

  this.title_5.html("QUIZ");
  this.title_5.position(400, 40);

  this.question_5.html("Question:- " );
  this.question_5.position(310, 150);
  this.option1_5.html("1:  " );
  this.option1_5.position(310, 170);
  this.option2_5.html("2: " );
  this.option2_5.position(310, 190);
  this.option3_5.html("3: " );
  this.option3_5.position(310, 210);
  this.option4_5.html("4: " );
  this.option4_5.position(310, 230);

  this.input_5.position(310, 300);
  this.button_5.position(560, 300);
  
 

  this.button_5.mousePressed(()=>{    
    this.answer_5.html("answer");   
    this.answer_5.position(310,400);
   
    nextButton_5=createSprite(680,350,10,10);
    nextButton_5.addImage("button", buttonImg);
    nextButton_5.scale=0.1;

  })

  if(mouseDown(nextButton_5)){
 question5.end();

  }

    
  }


end(){

this.hide();
nextButton_5.visible=false;
background(endImg);

  }}