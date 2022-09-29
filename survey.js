const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuestions = [
  "What's your name? Nicknames are also acceptable.",
  "What's an activity you like doing?",
  "What do you listen to while doing that ?",
  "Which meal is your favourite(eg: dinner, brunch, etc.",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite ?",
  "What is your superpower ? In a few words, tell us what you are amazing at!"
];

rl.question(surveyQuestions[0], (answer0) => {
  rl.question(surveyQuestions[1], (answer1) => {
    rl.question(surveyQuestions[2], (answer2) => {
      rl.question(surveyQuestions[3], (answer3) => {
        rl.question(surveyQuestions[4], (answer4) => {
          rl.question(surveyQuestions[5], (answer5) => {
            rl.question(surveyQuestions[6], (answer6) => {
              console.log(`The things that I like are: ${answer0}, ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${answer5}, ${answer6}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

