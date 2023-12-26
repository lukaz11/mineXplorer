import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Gamelogic } from '../../classes/gamelogic';

@Component({
  selector: 'app-game-launcher',
  templateUrl: './game-launcher.component.html',
  styleUrl: './game-launcher.component.scss',
})
export class GameLauncherComponent {
  game?: Gamelogic;
  mine: number = 10;
  row: number = 15;
  column: number = 15;
  gamewon: boolean = false;
  option: 'Leicht' | 'Mittel' | 'Schwer' | 'Custom' = 'Mittel'

  //Create iterable for "for directive"

  loopArray(start: number, stop: number, step: number): Array<number> {
    stop--;
    return (Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step))
  }

  //mark Field on Flag with rightclick

  setFlag(event: any, x: number, y: number) {
    event.preventDefault();
    switch (this.game?.flagField(x, y)) {
      case ('add'): {
        //  console.log('in add')
        const flag = document.createElement("i")
        flag.classList.add("bi")
        flag.classList.add("bi-flag")
        event.currentTarget.appendChild(flag)
        // event.currentTarget.innerHTML="flag"
        break
      }
      case ('remove'): {
        event.currentTarget.innerHTML = "";

      }
    }
    // if (this.game?.flagField(x, y) === 'add') {
    //   console.log('in add')
    //   event.currentTarget.innerHTML = "Flag";
    // }
    // if (this.game?.flagField(x, y) === 'remove') {
    //   event.currentTarget.innerHTML = "";
    // }
  }

  clickField(x: number, y: number) {
    this.addFieldNumber(x, y);
    if (this.game?.checkwinner()) {
      console.log("We have a winner")
    }
  }

  //

  addFieldNumber(x: number, y: number) {
    if (this.game?.gamefield[x][y].status === 'covered') {
      if (this.checkGameEnd(x, y)) {
        console.log("break")
        return
      }
      let id: string = this.calculateId(x, y).toString();
      let el = document.getElementById(id)
      // document.getElementById(id).innerHTML+=this.game?.getNearbyMines(x, y)
      if ((el !== undefined) && (el !== null) && (this.game?.getNearbyMines(x, y) !== undefined)) {
        el.innerHTML = this.game?.getNearbyMines(x, y).toString();

      }
      // event.currentTarget.innerHTML = this.game?.getNearbyMines(x, y);
      // console.log(event.currentTarget.getAttribute('id'));
      // console.log('id', this.calculateId(x,y))

      // Problem: current Target funktioniert nicht

      if (this.game?.getNearbyMines(x, y) === 0) {
        for (let i = 0; i < this.game?.testcases.length; i++) {
          let a = x + (this.game.testcases[i][0])
          let b = y + (this.game.testcases[i][1])
          if ((a >= 0) && (a < this.row) && (b >= 0) && (b < this.column) && (this.game?.gamefield[a][b].status === 'covered')) {
            this.addFieldNumber(a, b)
          }
        }
      }
    }
  }

  // check game End conditions

  checkGameEnd(x: number, y: number): boolean {
    if (this.game?.getMine(x, y)) {
      this.gameOver();
      this.revealField()
      return true;
    }
    else {
      return false
    }
  }

  gameOver() {
    console.log("Gameover, you clicked on a mine");
  }

  revealField() {
    const mine = document.createElement("i")
    mine.classList.add("bi")
    mine.classList.add("bi-infinity")
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.game?.gamefield[i][j].status === 'covered') {
          let id: string = this.calculateId(i, j).toString();
          let el = document.getElementById(id)
          if (this.game?.getMine(i, j)) {
            // console.log('in Mine', el)
            var newMine=mine.cloneNode(true)
            el?.appendChild(newMine)
          }
          else {
            if ((el !== undefined) && (el !== null) && (this.game?.getNearbyMines(i, j) !== undefined)) {
              el.innerHTML = this.game?.getNearbyMines(i, j).toString();

            }
          }
        }
      }
    }

  }

  // Erzeugt eine neue Instanz von Gamelogic mit Custom oder vordefinierten Werten

  onSubmit(form: any) {
    console.log(form)
    if (this.option !== 'Custom') {
      if (this.option === 'Leicht') {
        this.mine = 6;
        this.row = 10;
        this.column = 10
      }
      else if (this.option === 'Mittel') {
        this.mine = 10;
        this.row = 15
        this.column = 15
      }
      else {
        this.mine = 25;
        this.row = 30
        this.column = 30
      }
    }
    this.game = new Gamelogic(this.row, this.column, this.mine)
  }

  // Calculate Grid Field

  getRows(): object {
    return { 'grid-template-columns': `repeat(${this.column},1fr)` }
  }

  //alternative für Selektor, denke current Target ist besser

  calculateId(x: number, y: number): number {
    // console.log("x", x, "y", y, "calculateId", (x * this.column) + (y))
    return ((x * this.column) + y)
  }

  //check if Field is mine, returns bool or undefined

  logMine(x: number, y: number): any {
    return this.game?.getMine(x, y)
  }

  // For debugging, any bcz could return undefined

  logMinesNearby(x: number, y: number): any {
    return this.game?.getMinesNearby(x, y)
  }

  logStatus(x: number, y: number): any {
    return this.game?.getStatus(x, y)
  }

}
