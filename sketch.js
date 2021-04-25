var gameState = 0;
var tree,tree1,tree2,treeImg;
var jaguar1,jaguar2,jaguar3,jaguar4,crocimg;
var jaguarImg, tiger1Img, tiger2Img,jaguar2Img;
var edges;
var bgJungle, startbg;
var arrowIMG, arrow1, arrow2, arrow3, arrow4, arrow5, arrow, arrowg,arrow2;
var player,playerImgFront,playerImgBack, seabg;
var heartimg, skullimg;
var arrowCount = 0;
var lifeCount = 5;
var heart = 5, h = [],ht,heartGroup;
var kills=0;
var c1,c2,c3;
//c4,c5;
var dtreei, dtree1, dtree2, dtree3;
var mangoi,mango, apple, orange, banana, applei, orangei;
var fruitl = 0;
var apple2, orange2, mango2, banana2;
var friendsI, friendI;
var friendbg

function preload(){
  treeImg=loadImage("tree.png");
  dtreei = loadImage("2tree.png");

  jaguarImg=loadImage("jaguar.png");
  tiger1Img = loadImage("tiger.png");
  tiger2Img = loadImage("t1.png");
  jaguar2Img = loadImage("jaguar sitting.png");

  arrowIMG = loadImage("arrow.png");

  playerImgFront = loadImage("playerFront.png");
  playerImgBack = loadImage("girlBack.png"); 

  startbg = loadImage("start.jpg");
  seabg = loadImage("seabg.jpg"); 
  bgJungle = loadImage("toptree.png");

  heartimg = loadImage("life.png");
  crocimg = loadImage("crocodile.png");
  skullimg = loadImage("skull.png");
  arrow2 = loadImage("arrowi.png");

  mangoi = loadImage("mango.png");
  applei = loadImage("apple.png");
  bananai = loadImage("banana.png");
  orangei = loadImage("orange.png");

  friendsI = loadImage("friends.png");
  friendI = loadImage("friend1.png");
  friendbg = loadImage("friendbg.jpg");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight-111);
  
  //Adding Trees
  tree=createSprite(displayWidth-250, displayHeight/2, 50,50);
  tree.addImage(treeImg);
  tree.scale=0.4;
  
  tree1=createSprite(230, displayHeight-250, 50,50);
  tree1.addImage(treeImg);
  tree1.scale=0.4;

  tree2=createSprite(displayWidth/3+200, displayHeight/4, 50,50);
  tree2.addImage(treeImg);
  tree2.scale=0.4;

  //Adding Jaguar
  jaguar1=createSprite(displayWidth-100,100,50,50);
  jaguar1.addImage(jaguarImg);
  jaguar1.scale=0.3
  jaguar1.velocityX= Math.round(random(-3,3));
  jaguar1.velocityY= Math.round(random(-3,3));

  jaguar2=createSprite(100,displayHeight-500,50,50);
  jaguar2.addImage(tiger1Img);
  jaguar2.scale=0.2
  jaguar2.velocityX= Math.round(random(-3,3));
  jaguar2.velocityY= Math.round(random(-3,3));

  jaguar3=createSprite(displayWidth/3+200,displayHeight-180,50,50);
  jaguar3.addImage(tiger2Img);
  jaguar3.scale=0.35;

  jaguar4=createSprite(100,150,50,50);
  jaguar4.addImage(jaguar2Img);
  jaguar4.scale=0.3;

  //adding arrows
  arrow1 = createSprite(displayWidth-100,displayHeight/2,50,50);
  arrow1.addImage(arrowIMG);
  arrow1.scale=0.08;
  
  arrow2 = createSprite(displayWidth-100,50,50,50);
  arrow2.addImage(arrowIMG);
  arrow2.scale=0.08;

  arrow3 = createSprite(displayWidth/4,displayHeight/4,50,50);
  arrow3.addImage(arrowIMG);
  arrow3.scale=0.08;

  arrow4 = createSprite(100,displayHeight/2,50,50);
  arrow4.addImage(arrowIMG);
  arrow4.scale=0.08;
  
  arrow5 = createSprite(displayWidth/4+100,displayHeight-180,50,50);
  arrow5.addImage(arrowIMG);
  arrow5.scale=0.08;

  arrow=createSprite(0,0,0,0);
  arrow.visible=false;
  //adding player-girl
  player=createSprite(displayWidth/2,displayHeight/2,50,50);
  player.addImage(playerImgFront);
  player.scale=1.3;

  //setting colliders
  tree1.setCollider("circle",0,0,300);
  tree.setCollider("circle",0,0,300);
  tree2.setCollider("circle",0,0,300);

  jaguar1.setCollider("rectangle",0,0,400,395);
  jaguar2.setCollider("rectangle",0,0,650,400);
  jaguar3.setCollider("rectangle",0,0,500,350);
  jaguar4.setCollider("circle",-10,-20,200);
  //jaguar4.arrowug=true;

  player.setCollider("rectangle", 0, 0, 40,100);

  heart = 5;
  heartGroup = new Group();
  spawnHearts();
  edges=createEdgeSprites();
  
  arrowg = new Group();
  
  //Creating Crocodiles
  c1=createSprite(Math.round(random(50,displayWidth-50)),100,100,100);
  
  c1.addImage(crocimg);
  c1.scale=0.08;
  c1.visible=false;

  c2=createSprite(Math.round(random(50,displayWidth-50)),110,100,100);
  
  c2.addImage(crocimg);
  c2.scale=0.08;
  c2.visible=false;

  c3=createSprite(Math.round(random(50,displayWidth-50)),90,100,100);
  
  c3.addImage(crocimg);
  c3.scale=0.08;
  c3.visible=false;

 /* c4=createSprite(Math.round(random(50,displayWidth-50)),70,100,100);

  c4.addImage(crocimg);
  c4.scale=0.08;
  c4.visible=false;

  c5=createSprite(Math.round(random(50,displayWidth-50)),80,100,100);
  
  c5.addImage(crocimg);
  c5.scale=0.08;
  c5.visible=false;*/

  //creating level 3 images
  dtree1=createSprite(displayWidth/3+200, displayHeight/3, 60,60);
  dtree1.addImage(dtreei);
  dtree1.scale=0.4;
  dtree1.visible=false;

  dtree2=createSprite(displayWidth-300, displayHeight/4, 60,60);
  dtree2.addImage(dtreei);
  dtree2.scale=0.4;
  dtree2.visible=false;

  dtree3=createSprite(displayWidth/6, displayHeight-300, 60,60);
  dtree3.addImage(dtreei);
  dtree3.scale=0.4;
  dtree3.visible=false;

  dtree1.setCollider("rectangle",70,50,360,800);
  dtree2.setCollider("rectangle",70,50,360,800);
  dtree3.setCollider("rectangle",70,50,360,800);

  apple = createSprite(displayWidth/3-385, displayHeight/3, 20,20);
  apple.addImage(applei);
  apple.visible=false;
  apple.scale=0.07;

  orange = createSprite(Math.round(random(50,displayWidth-50)), displayHeight/2, 20,20);
  orange.addImage(orangei);
  orange.visible=false;
  orange.scale=0.07;

  mango = createSprite(displayWidth/3-185, displayHeight/3, 20,20);
  mango.addImage(mangoi);
  mango.visible=false;
  mango.scale=0.05;

  banana = createSprite(displayWidth/3+300, displayHeight/3-200, 20,20);
  banana.addImage(bananai);
  banana.visible=false;
  banana.scale=0.09;

  apple2 = createSprite(displayWidth/8, Math.round(random(50,displayHeight-55)), 20,20);
  apple2.addImage(applei);
  apple2.visible=false;
  apple2.scale=0.07;

  orange2 = createSprite(Math.round(random(50,displayWidth-50)), displayHeight/3+400, 20,20);
  orange2.addImage(orangei);
  orange2.visible=false;
  orange2.scale=0.07;

  mango2 = createSprite(Math.round(random(50,displayWidth-50)), Math.round(random(50,displayHeight-50)), 20,20);
  mango2.addImage(mangoi);
  mango2.visible=false;
  mango2.scale=0.05;

  banana2 = createSprite(displayWidth/3-300, displayHeight/3+200, 20,20);
  banana2.addImage(bananai);
  banana2.visible=false;
  banana2.scale=0.09;

  //end screen imgs
  //adding friends
  friends = createSprite(displayWidth/2,displayHeight/2,50,50);
  friends.addImage(friendsI);
  friends.visible=false;
  friends.scale=0.5;
  friend = createSprite(displayWidth/2-150,displayHeight/2,50,50);
  friend.addImage(friendI);
  friend.visible=false;
  friend.scale=1.6;

}

function draw() {
  if(gameState===0){
    background(startbg);
  }

 
  if(keyDown("space")){
    gameState=1;
  }
  if(gameState===1){
    //background
    background("green");
    imageMode(CENTER)
    image(bgJungle,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    spawnHearts();
    //spawnArrows();

    //moving player
    if(keyDown("up")){
      //player.y=player.y-3;
      player.velocityY=-5;
      player.velocityX=0;
    }
    if(keyDown("down")){
      //player.y=player.y+3;
      player.velocityY=5;
      player.velocityX=0;
    }
    if(keyDown("right")){
      //player.x=player.x +3;
      player.velocityY=0;
      player.velocityX=5;
    }
    if(keyDown("left")){
      //player.x=player.x-3;
      player.velocityY=0;
      player.velocityX=-5;
    }

    // Collecting Arrows
    if(player.isTouching(arrow1)){
      arrow1.destroy();
      arrowCount++;
    }
    if(player.isTouching(arrow2)){
      arrow2.destroy();
      arrowCount++;
    }
    if(player.isTouching(arrow3)){
      arrow3.destroy();
      arrowCount++;
    }
    if(player.isTouching(arrow4)){
      arrow4.destroy();
      arrowCount++;
    }
    if(player.isTouching(arrow5)){
      arrow5.destroy();
      arrowCount++;
    }
    //Displaying arrow count on screen 1
    fill("white");
    rect(displayWidth/2-220,5,140,40);
    textSize(25);
    fill("red");
    text("Arrows: "+arrowCount, displayWidth/2-200,30);

    if(player.isTouching(jaguar1) || player.isTouching(jaguar2) || player.isTouching(jaguar3)
    || player.isTouching(jaguar4)){
      lifeCount=lifeCount-1;
      heart=heart-1;
      spawnHearts();
    }

    if(lifeCount<=0){
      
      textSize(50);
      fill("white");
      text("GAME OVER", displayWidth/2-200, displayHeight/2);
      player.velocityX=0;
      player.velocityY=0;
      jaguar1.velocityX=0;
      jaguar1.velocityY=0;
      jaguar2.velocityX=0;
      jaguar2.velocityY=0;
    }
        
    if(arrowCount===1){
      gameState=2;
    }

    //jaguars bouncing off
    jaguar1.bounceOff(edges[0]);
    jaguar1.bounceOff(edges[1]);  
    jaguar1.bounceOff(edges[2]);
    jaguar1.bounceOff(edges[3]);  
    jaguar1.bounceOff(tree);
    jaguar1.bounceOff(tree1);
    jaguar1.bounceOff(tree2);

    jaguar2.bounceOff(edges[0]);
    jaguar2.bounceOff(edges[1]);  
    jaguar2.bounceOff(edges[2]);
    jaguar2.bounceOff(edges[3]);  
    jaguar2.bounceOff(tree);
    jaguar2.bounceOff(tree1);
    jaguar2.bounceOff(tree2);
    
    player.bounceOff(jaguar1);
    player.bounceOff(jaguar2);
    player.bounceOff(jaguar3);
    player.bounceOff(jaguar4);
    player.bounceOff(edges);

  
    // player colliding
    player.collide(tree);
    player.collide(tree1);
    player.collide(tree2);
    
    drawSprites();
  }
  

  if(gameState===2){
    jaguar1.destroy();
    jaguar2.destroy();
    jaguar3.destroy();
    jaguar4.destroy();
    tree.destroy();
    tree1.destroy();
    tree2.destroy();
    arrow1.destroy();
    arrow2.destroy();
    arrow3.destroy();
    arrow4.destroy();
    arrow5.destroy();
    c1.visible=true;
    c2.visible=true;
    c3.visible=true;
   // c4.visible=true;
    //c5.visible=true;
    c1.velocityY=0.35;
    c2.velocityY=0.4;
    c3.velocityY=0.3;
   // c4.velocityY=0.6;
    //c5.velocityY=0.5;
    //background
    background("lightBlue");
    imageMode(CENTER);
    image(seabg,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    fill("white");
    textSize(25);
    text("Press 'S' to shoot Crocodiles", displayWidth/2-100,80)
    fill("black");
    textSize(25);
    text("move using the mouse", displayWidth/2-400,80)

    
    //Displaying arrow count on screen 2
    fill("white");
    rect(displayWidth/2-220,5,140,40);
    textSize(25);
    fill("red");
    text("Arrows: "+arrowCount, displayWidth/2-200,30);
    
    imageMode(CENTER);
    image(skullimg,displayWidth/2+100, 25, 40,40);
    text(":"+kills+" / 3", displayWidth/2+120,30);
    
    spawnHearts();
    
    //console.log(heart);
    /*c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();*/

    player.addImage(playerImgBack);
    player.y = displayHeight-200;
    player.x= mouseX;
    if(player.isTouching(c1) || player.isTouching(c2) || player.isTouching(c3)){
      lifeCount=lifeCount-1;
      heart=heart-1;
      spawnHearts();
    }
    if(keyWentDown("s")){
      arrowCount--;
      remakeArrow();
    }
    if(arrow.isTouching(c1)){
      arrowg.destroyEach();
      kills++;
      c1.destroy();
    }
    if(arrow.isTouching(c2)){
      arrowg.destroyEach();
      kills++;
      c2.destroy();
    }
    if(arrow.isTouching(c3)){
      arrowg.destroyEach();
      kills++;
      c3.destroy();
    }
    /*if(arrow.isTouching(c4)){
      arrowg.destroyEach();
      kills++;
      c4.destroy();
    }
    if(arrow.isTouching(c5)){
      arrowg.destroyEach();
      kills++;
      c5.destroy();
    }*/

    drawSprites();
    if(lifeCount<=0){
      player.x = displayWidth/2;
      textSize(50);
      fill("black");
      text("GAME OVER!", displayWidth/2-200, displayHeight/2);
      
    }
    if(kills===3){
      gameState=3;
    }
  }

    if (gameState===3){
      background(217,179,130);
      player.collide(edges);

      //destroying previous objects
      heartGroup.destroyEach();
      arrow1.destroy();
      arrow2.destroy();
      arrow3.destroy();
      arrow4.destroy();
      arrow5.destroy();
      
      //player position
      player.x = mouseX;
      player.y = mouseY;

      //making player collide trees
      player.collide(dtree1);
      player.collide(dtree2);
      player.collide(dtree3);

      //making objects visible again
      dtree1.visible=true;
      dtree2.visible=true;
      dtree3.visible=true;
      mango.visible=true;
      mango2.visible=true;
      apple.visible=true;
      apple2.visible=true;
      banana.visible=true;
      banana2.visible=true;
      orange.visible=true;
      orange2.visible=true;

      //girl collecting friuts
      if(player.isTouching(mango)){
        mango.destroy();
        fruitl++
      }
      if(player.isTouching(mango2)){
        mango2.destroy();
        fruitl++
      }
      if(player.isTouching(banana)){
        banana.destroy();
        fruitl++
      }
      if(player.isTouching(banana2)){
        banana2.destroy();
        fruitl++
      }
      if(player.isTouching(orange)){
        orange.destroy();
        fruitl++
      }
      if(player.isTouching(orange2)){
        orange2.destroy();
        fruitl++
      }
      if(player.isTouching(apple)){
        apple.destroy();
        fruitl++
      }
      if(player.isTouching(apple2)){
        apple2.destroy();
        fruitl++
      }

      textSize(30);
      text("collect 8 fruits: "+fruitl+"/8", displayWidth/2-100, 35);

      if(fruitl===8){
        gameState=4;
      }
      drawSprites();
    }

    if(gameState===4){
      background(friendbg);
      friends.visible=true;
      friend.visible=true;

      dtree1.visible=false;
      dtree2.visible=false;
      dtree3.visible=false;
  
      player.addImage(playerImgFront);
      player.y = displayHeight/2+17;
      player.x= displayWidth/2+125;
      player.scale=1.5;

      fill("white");
      textSize(25);
      text("CONGRATULATIONS! YOU RETURNED ANNE BACK TO HER FRIENDS!!", displayWidth/2-400,590)      

     drawSprites(); 
    }

}
function spawnHearts(){
  heartGroup.destroyEach();
   for(var i = 1;i<=heart;i++){
     ht = createSprite(displayWidth/19+50 * i, 30, 20, 20);
     ht.addImage(heartimg);
     ht.scale = 0.4;
     heartGroup.add(ht);
   }
 }

 function spawnArrows() {
    //adding arrows
  arrow1 = createSprite(displayWidth-100,displayHeight/2,50,50);
  arrow1.addImage(arrowIMG);
  arrow1.scale=0.08;
  
  arrow2 = createSprite(displayWidth-100,50,50,50);
  arrow2.addImage(arrowIMG);
  arrow2.scale=0.08;

  arrow3 = createSprite(displayWidth/4,displayHeight/4,50,50);
  arrow3.addImage(arrowIMG);
  arrow3.scale=0.08;

  arrow4 = createSprite(100,displayHeight/2,50,50);
  arrow4.addImage(arrowIMG);
  arrow4.scale=0.08;
  
  arrow5 = createSprite(displayWidth/4+100,displayHeight-180,50,50);
  arrow5.addImage(arrowIMG);
  arrow5.scale=0.08;
 }

 function remakeArrow(){
  arrow=createSprite(player.x,player.y,10,10);
  arrow.addImage(arrowIMG); 
  arrow.scale=0.08;
  arrow.velocityY=-5;
  
  arrow.lifetime=350;
  arrowg.add(arrow);
}