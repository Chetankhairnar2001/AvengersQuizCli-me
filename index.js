//console.log("Hi am Chetan Khiarnar");
var readlinesync=require("readline-sync");
const chalk = require('chalk');
var score=0;

var data=[
  {name:"rohan",score:2},
  
  {name:"vedant",
  score:3},
  {name:"sahil",score:3},
  {name:"Chetan", score:6
  }
]

var name=readlinesync.question("Whats ur name Buddy ");
console.log(chalk.yellowBright((`Welcome`),name,(` to the Quizgame of Marvel
    `)));

function play(question,answer){
  var userName=readlinesync.question(question);

  if(userName.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log(chalk.bold.green("right"));
  }
 else{
   console.log(chalk.bold.red("wrong"));
   console.log(chalk.cyan(answer,"is the correct option"));
 }
  console.log("Your Score is",score);
  console.log("-------");
}

var questionList=[{
  question:`Does the IronMan still require a Arc reator 
  a:Yes
  b:No
   `,
  answer:"b"
},
{
  question:`How does CaptainAmerica look in the EndGame
  a:Young
  b:Old
   `,
  answer:"b"
},
{question:`Does HawkEye have Kids
  a:No
  b:Yes
  `,
  answer:"b"
},
{
  question:` Child Of Thanos
  a:Gamora
  b:Black Widow
  `,
  answer:"a"
},
{  question:` When was Marvel Comic invented
  a:1930
  b:1939
  c:1961
  `,
  answer:"b"
},{
question:` Who played the role of Black Panther
  a: Chadwick Boseman
  b:Michael B. Jordan
  `,
  answer:"a"
},
{
  question:`Who is the Strongest Avenger
  a:Thor
  b:Dr Strange
  c:Hulk
  `,
  answer:"a"
}
];

for(var i=0;i<questionList.length;i++){
  play(questionList[i].question,questionList[i].answer);
}

if(score>=data[data.length-1].score){
  console.log(chalk.cyanBright("YAYY U ARE HIGHEST SCORER  with score",score));
}else{
  console.log(chalk.magenta.bold("Your total score is",score));
  console.log(chalk.cyanBright("Highest Score Until Now",data[data.length-1].score,"belongs to ",data[data.length-1].name.toUpperCase()));
}
console.log(chalk.cyanBright(" Send a Screenshot of Your to add in databse"));

if(score>=data[data.length-1].score){
  data.push({"name":name ,"score":score});
}
