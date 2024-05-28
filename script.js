document.addEventListener("DOMContentLoaded", generateEquation);
var a 
var b
var c 
var d 
var operatorx 
var operatory
var operatorz
var operatord
var starttime
var endtime
var factor

var score
score=0

var highscore
highscore=0

function generateEquation() {
    starttime=Date.now();
    a = Math.floor(Math.random() * 10)*2 ;
    b = Math.floor(Math.random() * 10)*2 ;
    c = Math.floor(Math.random() * 10)*2 ;
    d = Math.floor(Math.random() * 20) ;
    const operators = ['+', '-'];
    operatorx = operators[Math.floor(Math.random() * operators.length)];
    operatory = operators[Math.floor(Math.random() * operators.length)];
    operatorz = operators[Math.floor(Math.random() * operators.length)];
    operatord = operators[Math.floor(Math.random() * operators.length)];

    const equation = `x^2+y^2+z^2 ${operatorx} ${a} x ${operatory} ${b} y ${operatorz} ${c} z ${operatord} ${d} = 0`;
    document.getElementById('equation').textContent = equation;
    document.getElementById('mx').value = '';
    document.getElementById('my').value = '';
    document.getElementById('mz').value = '';
    document.getElementById('radius').value = '';
}

function signedvalue(sign, value){
    if (sign=='-'){
        return -value;
    }
    else {
        return value;
    }

}

function checkAnswer() {
    if ((a**2+b**2+c**2)/4-d<0){
        document.getElementById('result').textContent = 'Nicht richtig. Das ist kein Kreis!';
        document.getElementById('Score').textContent = 'Aktuelle Punktzahl = 0';
        score=0;
        generateEquation();
    }
    else{
        const userAnswerx = parseFloat(document.getElementById('mx').value);
        const userAnswery = parseFloat(document.getElementById('my').value);
        const userAnswerz = parseFloat(document.getElementById('mz').value);
        const userAnswerr = parseFloat(document.getElementById('radius').value);
        
        userAnswer = [userAnswerx,userAnswery,userAnswerz,userAnswerr]
        
        const correctAnswerm1 = -signedvalue(operatorx,a)/2;
        const correctAnswerm2 = -signedvalue(operatory,b)/2;
        const correctAnswerm3 = -signedvalue(operatorz,c)/2;
        const correctAnswerr = (a**2+b**2+c**2)/4-signedvalue(operatord,d);
        
        correctAnswer=[correctAnswerm1,correctAnswerm2,correctAnswerm3,correctAnswerr]
    
        if (arraysEqual(userAnswer,correctAnswer)) {
            document.getElementById('result').textContent = 'Richtig!';
            endtime=Date.now();
            factor=Math.floor(1000000/(endtime-starttime))
            score=score+factor
            if (score>highscore){
                highscore=score;
                document.getElementById('highscore').textContent = `Highscore = ${highscore}`;
            }
            document.getElementById('Score').textContent = `Aktuelle Punktzahl = ${score}`;
            document.getElementById('lastscore').textContent = `Letzte Punktzahl = ${factor}`;
            generateEquation();
        }
        else {
            document.getElementById('result').textContent = `Nicht richtig. Die richtige Antwort ist ${correctAnswer}. Deine Antwort ist ${userAnswer}`;
            document.getElementById('Score').textContent = 'Aktuelle Punktzahl = 0';
            score=0;
            generateEquation();
        }
    }

}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function nocircle() {
    if ((a**2+b**2+c**2)/4-signedvalue(operatord,d)<0){
        document.getElementById('result').textContent = 'Richtig. Das ist kein Kreis!';
        score=score+1
        endtime=Date.now();
        factor=Math.floor(1000000/(endtime-starttime))
        score=score+factor
        document.getElementById('lastscore').textContent = `Letzte Punktzahl = ${factor}`;
        if (score>highscore){
            highscore=score;
            document.getElementById('highscore').textContent = `Highscore = ${highscore}`;

        }
        document.getElementById('Score').textContent = `Aktuelle Punktzahl = ${score}`;
        generateEquation();
    }
    else{
        document.getElementById('result').textContent = 'Nicht richtig. Das ist ein Kreis!';
        document.getElementById('Score').textContent = 'Aktuelle Punktzahl = 0';
        score=0;
        generateEquation();

    }

}
