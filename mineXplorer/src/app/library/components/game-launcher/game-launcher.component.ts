import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../../classes/gamelogic';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-launcher',
  templateUrl: './game-launcher.component.html',
  styleUrl: './game-launcher.component.scss',
})
export class GameLauncherComponent implements OnInit {
  game?: Gamelogic;
  mine: number = 40;
  row: number = 16;
  column: number = 16;
  gamewon: boolean = false;
  firstMove: boolean= true;
  countUnveiledCells: number = 0
  //activeGame:boolean=false;
  option: 'Leicht' | 'Mittel' | 'Schwer' | 'Custom' = 'Mittel';
  constructor(private dialog: MatDialog, public gameservice: GameService) {

  }
  ngOnInit(): void {
    this.gameservice.activeGame = false;
    //this.openDialog(true)
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
          this.gameservice.gameEnd = true;
          this.openDialog(true);
        }
        break
      }
      case ('remove'): {
        event.currentTarget.innerHTML = "";

      }
    }
    this.game?.updateGameStatistics();
  }

  clickField(x: number, y: number) {
    if(this.firstMove){
      this.game?.generateMines(x,y);
      this.firstMove=false;
      this.gameservice.resetTimer()
      this.gameservice.startTimer()
    }
    this.addFieldNumber(x, y);
    if (this.game?.checkwinner()) {
      this.gameservice.gameEnd = true;
      this.openDialog(true);
    }
    this.game?.getFlaggsNearby(x,y);
    if (this.game?.getStatus(x,y)) {
      this.countUnveiledCells++;
    }

    // console.log(this.countUnveiledCells)
  }

  // Anzeigen der benachbarten Elemente im Feld

  addFieldNumber(x: number, y: number) {
    if (this.game?.gamefield[x][y].status === 'covered') {
      if (this.checkGameEnd(x, y)) {
        this.gameservice.gameEnd = true
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
    if(this.game?.gamefield[x][y].status === 'uncovered'&&(this.game?.getFlaggsNearby(x,y)===this.game?.getMinesNearby(x,y))){
      for (let i = 0; i < this.game?.testcases.length; i++) {
        let a = x + (this.game.testcases[i][0])
        let b = y + (this.game.testcases[i][1])
        if ((a >= 0) && (a < this.row) && (b >= 0) && (b < this.column) && (this.game?.gamefield[a][b].status === 'covered')) {
          this.addFieldNumber(a, b)
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
      // this.gameOver();
      this.revealField();
      if (this.countUnveiledCells > 0) {
        this.openDialog(false);
      } else {
        this.restartGame()
        this.clickField(x, y)
      }
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
    const mine = document.createElement("img")
    let fieldsize=`${(45/this.column).toFixed(2)}vh`
    // mine.classList.add("bi")
    // mine.classList.add("bi-infinity")
    mine.setAttribute("src","assets/images/icons/mine.png")
    mine.classList.add("iconH")
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.game?.gamefield[i][j].status === 'covered') {
          let id: string = this.calculateId(i, j).toString();
          let el = document.getElementById(id)
          if (this.game?.getMine(i, j)) {
            var newMine = mine.cloneNode(true)
            el?.appendChild(newMine)
            this.calculateHeight(".iconH",`${fieldsize}`)
            // this.resize(".iconH")
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
    this.updateDifficulty()
    //check if values make sense
    if ((this.row * this.column) <= this.mine) {
      alert("Reihe * Spalte muss kleiner sein als Anz. Minen")
      return;
    }
    this.game = new Gamelogic(this.row, this.column, this.mine);
    this.gameservice.activeGame = true;
    this.resize(".size");

    this.game.updateGameStatistics()
  }

  updateDifficulty() {
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

  }

  restartGame() {
    this.gameservice.resetTimer()
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
    this.countUnveiledCells = 0;
    this.firstMove=true
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

  //back to game settings
 newGame() {
  this.gameservice.activeGame = false;
  this.gameservice.resetTimer();
  this.firstMove=true;
  }

  getProgress() {
    // console.log(this.mine, this.row, this.column)
    let time = this.gameservice.minutes * 60 + this.gameservice.secounds
    let fields = this.row * this.column
    let progress = (time / fields) * 100 / 3
    return progress
  }

  //Prevent overflow of images/numbers

  calculateHeight(className:any,value:string){
    let ele =document.querySelectorAll(className);
    for(let index =0;index < ele.length;index++){
      ele[index].style.maxHeight=value;
    }
  }

  resize(className:any){
    this.calculateHeight(className,`${(this.row/90).toFixed(2)}vh`)
  }

}

