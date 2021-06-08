


if (jQuery) {
  $(function() {
    // 
    const jouer = document.querySelector('.roll-dice')
    const hold = $('.hold')
    const newGame = $('.title')

    const scorePlayer1 = document.querySelector('.player1 .round-container .score-round')
    const scorePlayer2 = document.querySelector('.player2 .round-container .score-round')

    const totalPlayer1 = $('.player1 .total-container .score-total')
    const totalPlayer2 = $('.player2 .total-container .score-total')

    const svgPlayer1 = $('.player1 .round-container .title-player svg')
    const svgPlayer2 = $('.player2 .round-container .title-player svg')

    const imgDice = document.querySelector('.dices')
    
    
    let svgDices = {
      dice1: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16" style="color: red;">
      <circle cx="8" cy="8" r="1.5"/>
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
    </svg>`,

      dice2: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16" style="color: red;">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`,
    
      dice3: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16" style="color: red;">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`,

      dice4: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16" style="color: red;">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`,

      dice5: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16" style="color: red;">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`,

      dice6: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16" style="color: red;">
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>`
  }
    class Partie {
      constructor (joueurs, points, btnJouer, btnHold) {
        this.joueurs = joueurs
        this.points = points
        this.btnJouer = btnJouer
        this.btnHold = btnHold
      }

      init () {
        this.joueurs.forEach(joueur => {
          joueur.scorePlayer.innerHTML = 0;
          joueur.score = 0;
          joueur.totalPlayer.html(0);
          joueur.total = 0; 
        });

        this.joueurs[0].isRound = true
        this.joueurs[0].svgPlayer.fadeIn()

        this.joueurs[1].isRound = false
        this.joueurs[1].svgPlayer.fadeOut()

        this.btnDisabled(false)
      }

      btnDisabled (isDisable) {
        if (isDisable) {
          this.btnJouer.style.pointerEvents = 'none'
          this.btnJouer.style.opacity = '0.6'
          this.btnHold.css({'pointer-events': 'none', 'opacity': '0.6'})
        } else {
          this.btnJouer.style.pointerEvents = 'visible'
          this.btnJouer.style.opacity = '1'
          this.btnHold.css({'pointer-events': 'visible', 'opacity': '1'})
        }
      }

      checkVainqueur () {
        this.joueurs.forEach(joueur => {
          if (joueur.total >= this.points) {
            this.btnDisabled(true)
            alert(`${joueur.nom} ${joueur.prenom} à gagné la partie !`)
          }
        })
      }
    }
    
    class Joueur {
      constructor(nom, prenom, scorePlayer, svgPlayer, totalPlayer) {
        this.nom = nom
        this.prenom = prenom
        this.scorePlayer = scorePlayer
        this.svgPlayer = svgPlayer
        this.totalPlayer = totalPlayer

        this.score = 0
        this.total = 0
        this.isRound = false
      }

      rollDice (randomDice) {
        console.log(this.scorePlayer)
        console.log(randomDice)
        console.log(this.score)
        this.score += randomDice;
        this.scorePlayer.innerHTML = this.score;
      }

      resetRound () {
        if (this.isRound) {
          this.isRound = false
          this.svgPlayer.fadeOut()
          this.scorePlayer.innerHTML = 0
          this.score = 0
        } else {
          this.isRound = true
          this.svgPlayer.fadeIn()
        }
      }

      saveScore (points) {
        this.total += this.score
        this.totalPlayer.html(this.total)
        if (this.total < points) {
          joueur1.resetRound()
          joueur2.resetRound()
        }
      }
    }

    let joueur1 = new Joueur('Joueur', '1', scorePlayer1, svgPlayer1, totalPlayer1)
    let joueur2 = new Joueur('Joueur', '2', scorePlayer2, svgPlayer2, totalPlayer2)

    let partie = new Partie([joueur1, joueur2], 100, jouer, hold)

    partie.init();

    newGame.click(function() {
      partie.init()
    })
    
    jouer.addEventListener('click', function() {
 
        const randomImg = function (randomDice) {
          let newImgDice;
          switch (randomDice) {
            case 1: 
              newImgDice = svgDices.dice1;
              break;
      
            case 2: 
              newImgDice = svgDices.dice2;
              break;
      
            case 3: 
              newImgDice = svgDices.dice3;
              break;
      
            case 4: 
              newImgDice = svgDices.dice4;
              break;
      
            case 5: 
              newImgDice = svgDices.dice5;
              break;
      
            case 6: 
              newImgDice = svgDices.dice6;
              break;
          }
    
          return newImgDice;
        }
    
        let randomDice = 0;
        
        var dice = setInterval(function(){
          randomDice = Math.floor(Math.random() * (7 - 1)) + 1; // Math.random() * (max - min) + min;
          partie.btnDisabled(true)
          imgDice.innerHTML = randomImg(randomDice);
        },150); // funtion appelé toute les 0.2 secondes

        setTimeout(function(){
          clearInterval(dice); //clear above interval after 5 seconds
          partie.btnDisabled(false)
          if (randomDice !== 1) {
            if (joueur1.isRound) {
              joueur1.rollDice(randomDice)
            } else {
              joueur2.rollDice(randomDice)
            }
          } else {
            joueur1.resetRound()
            joueur2.resetRound()
          }
        },1500);     
    });

    hold.click(function () {

      if (joueur1.isRound) {
        joueur1.saveScore(partie.points)
      } else {
        joueur2.saveScore(partie.points)
      }

      partie.checkVainqueur()
    })
    
  });
} else {
  console.log('Il y a un soucis dans l\'installation de jQuery')
}