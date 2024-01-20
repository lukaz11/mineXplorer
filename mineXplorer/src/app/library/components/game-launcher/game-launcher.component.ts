import { Component } from '@angular/core';
import { Gamelogic } from '../../classes/gamelogic';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

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
  activeGame: boolean = false;
  option: 'Leicht' | 'Mittel' | 'Schwer' | 'Custom' = 'Mittel';

  constructor(private dialog: MatDialog) {

  }

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
        if (this.game?.checkwinner()) {
          this.openDialog(true);
        }
        break
      }
      case ('remove'): {
        event.currentTarget.innerHTML = "";

      }
    }
  }

  clickField(x: number, y: number) {
    this.addFieldNumber(x, y);
    if (this.game?.checkwinner()) {
      this.openDialog(true);
    }
  }

  // Anzeigen der benachbarten Elemente im Feld

  addFieldNumber(x: number, y: number) {
    if (this.game?.gamefield[x][y].status === 'covered') {
      if (this.checkGameEnd(x, y)) {
        console.log("break")
        return
      }
      let id: string = this.calculateId(x, y).toString();
      let el = document.getElementById(id)
      if ((el !== undefined) && (el !== null) && (this.game?.getNearbyMines(x, y) !== undefined)) {
        let anzahlMinen: number = this.game?.getNearbyMines(x, y);
        if (anzahlMinen > 0) {
          el.innerHTML = anzahlMinen.toString()
        }
        el.classList.add(this.getClass(anzahlMinen))
      }

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

  // Colors for different classes + Remove class Method

  getClass(NearbyMines: number): string {
    return (NearbyMines < 4) ? `mine-${NearbyMines}` : `mine-4`
  }

  removeClass(node: any) {
    var regx = new RegExp('\\b' + 'mine-' + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
  }

  // check game End conditions

  checkGameEnd(x: number, y: number): boolean {
    if (this.game?.getMine(x, y)) {
      this.gameOver();
      this.revealField();
      this.openDialog(false);
      return true;
    }
    else {
      return false
    }
  }

  gameOver() {
    console.log("Gameover, you clicked on a mine");
  }

  openDialog(gameWin: boolean) {
    const dialogRef = this.dialog.open(ResultComponent, {
      width: '40%',
      height: '25%',
      data: {
        win: gameWin
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.restartGame()
      }
    });
  }

  // Wenn das Spiel verloren wurde, deckt alle Felder auf

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
            var newMine = mine.cloneNode(true)
            el?.appendChild(newMine)
          }
          else {
            if ((el !== undefined) && (el !== null) && (this.game?.getNearbyMines(i, j) !== undefined)) {
              let anzahlMinen: number = this.game?.getNearbyMines(i, j);
              if (anzahlMinen > 0) {
                el.innerHTML = anzahlMinen.toString()
              }
              el.classList.add(this.getClass(anzahlMinen))

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
        this.mine = 10;
        this.row = 9;
        this.column = 9
      }
      else if (this.option === 'Mittel') {
        this.mine = 40;
        this.row = 16
        this.column = 16
      }
      else {
        this.mine = 99;
        this.row = 22
        this.column = 22
      }
    }
    this.game = new Gamelogic(this.row, this.column, this.mine);
    this.activeGame = true;
  }

  restartGame() {
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.column; j++) {
        let id: string = this.calculateId(i, j).toString();
        let el = document.getElementById(id)
        if ((el !== undefined) && (el !== null) && (this.game?.getNearbyMines(i, j) !== undefined)) {
          el.innerHTML = ""
          this.removeClass(el)
        }
      }
      this.game = new Gamelogic(this.row, this.column, this.mine)
    }
  }

  // Calculate Grid Field, fuegt CSS-Klasse für die richtige Anzahl der Reihen und Spalten hinzu

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
