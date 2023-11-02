USER INPUT rock, paper or scissors

Random generator function:
    var random = rock, paper or scissors

loss = 0
win = 0

IF user input === random:
    OUTPUT 'Draw'
ELSE IF user input === 'rock" && rand === 'paper'  
    OUTPUT 'win'
    win++
ELSE IF user input === 'rock' && rand === 'scissors' 
    OUTPUT 'loss'
    loss++
ELSE IF user input === 'paper' && rand === 'scissors'
    OUTPUT 'loss'
    loss++
ELSE IF user input === 'paper' && rand === 'rock'
    OUTPUT 'win'
    win++
ELSE IF user input === 'scissors' && rand === 'rock'
    OUTPUT 'loss'
    loss++
ELSE IF user input === 'scissors' && rand === 'paper'
    OUTPUT 'win'
    win++

ASK user if they would like to play again

IF yes
    Cycle through code again
IF No
    OUTPUT 'Thank you for playing! Hope to see you again!"
    OUTPUT 'Your total wins were: ' + win ' and you total losses were ' + loss