import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  activeGame: boolean = false;
  restart: boolean = false;
  gameEnd: boolean = false;
  constructor() { }


  //anti crash prevention

  minutes = 0
  secounds = 0
  resetTimer() {
    this.minutes = 0
    this.secounds = 0
    this.restart = true
    this.gameEnd = true
  }

  startTimer() {
    console.log(this.activeGame)
    console.log(this.resetTimer)

    let intervalId = setInterval(() => {
      if (this.activeGame == false || this.restart == true) clearInterval(intervalId)
      if (this.gameEnd) {
        return
      }

      if (this.secounds + 1 == 60) {
        this.minutes += 1;
        this.secounds = 0;
      }
      else this.secounds += 1

      //console.log(secounds)
    }, 1000)

    this.restart = false
    this.gameEnd = false
  }
}
