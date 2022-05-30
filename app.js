const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess())
        this.render()
      }while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
    },
    getGuess: function() {
      let guess = 0
      while (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum) {
        guess = parseInt(prompt(`Enter a guess  between ${this.smallestNum} and ${this.biggestNum}.`))
      }
      return guess
    },
    render: function() {
      if(this.secretNum === this.prevGuesses[this.prevGuesses.length - 1]) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.join(',')}!`)
      }
      else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
        alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join(',')}`)
      } else {
        alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(',')}`)
      }
    }
    
  }
game.play()