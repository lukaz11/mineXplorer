import { Field } from "./field";
export class Gamelogic {
    gamefield: Field[][] = []
    private flaggedField:number=0;
    private row: number;
    private column: number;
    private mines: number;
    testcases = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]
    constructor(row: number, column: number, mines: number) {
        this.row = row;
        this.column = column;
        this.mines = mines
        this.gamefield = []
        for (let x = 0; x < this.row; x++) {
            this.gamefield[x] = [];
            for (let y = 0; y < this.column; y++) {
                this.gamefield[x][y] = new Field(x, y)
            }
        }
    }

    // setting the flag status on a cell

    flagField(x:number,y:number):'remove'|'add'|'noAction'{
        if(this.gamefield[x][y].status==='covered'){
            this.gamefield[x][y].status='flagged';
            this.flaggedField++
            return 'add'
        }
        if(this.gamefield[x][y].status==='flagged'){
            this.gamefield[x][y].status='covered';
            this.flaggedField--
            return 'remove'
        }
        return 'noAction'
    }

    // places mines initially

    generateMines(a:number,b:number) {
        let i = 0;
        const fieldsize = this.row * this.column;
        while (i < this.mines) {
            let val = this.getRandomInt(fieldsize);
            let y = Math.floor(val / this.row);
            let x = val % this.row;
            if ((!(this.gamefield[x][y].mine))&&(!((a===x)&&(b===y)))) {
                this.gamefield[x][y].mine = true;
                i++;
            }
        }
    }

    checkwinner():boolean{
        if(this.mines!==this.flaggedField){
            return false
        }
        for(let x=0;x < this.row;x++){
            for(let y=0;y < this.column;y++){
                if(this.gamefield[x][y].status==='covered'){
                    return false
                }
            }
        }
        return true
    }

    // calculate Flaggs in nearby fields

    getFlaggsNearby(x:number,y:number):number{
        let counter:number=0
        for (let i = 0; i < this.testcases.length; i++) {
            let a = x + (this.testcases[i][0])
            let b = y + (this.testcases[i][1])
            if ((a >= 0) && (a < this.row) && (b >= 0) && (b < this.column) && (this.gamefield[a][b].status==="flagged")) {
                counter++
            }
        }
        return counter
    }

    // getter functions

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    getStatus(x:number,y:number){
        return this.gamefield[x][y].status
    }

    getMine(x:number,y:number){
        return this.gamefield[x][y].mine
    }

    getMinesNearby  (x:number,y:number):number{
        return this.gamefield[x][y].minesNearby
    }

    // calculate Mines in nearby fields

    getNearbyMines(x: number, y: number): number {
        if (this.gamefield[x][y].status === 'covered') {
            this.gamefield[x][y].status='uncovered'
            for (let i = 0; i < this.testcases.length; i++) {
                let a = x + (this.testcases[i][0])
                let b = y + (this.testcases[i][1])
                // check if array out of bound/negativ
                if ((a >= 0) && (a < this.row) && (b >= 0) && (b < this.column) && (this.gamefield[a][b].mine)) {
                    this.gamefield[x][y].minesNearby++
                }
            }

        }
        this.updateGameStatistics()
        return this.gamefield[x][y].minesNearby
    }

    remainingFlags = 0;
    fieldsDiscovered = 0;
    remainingFields = 0;
    updateGameStatistics() {
      this.remainingFlags = this.mines;
      this.fieldsDiscovered = 0;
      this.remainingFields = this.row * this.column;
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (this.gamefield[i][j].status == 'flagged') { //wenn Flagge
            this.remainingFlags--;
            this.remainingFields--;
          } else if (this.gamefield[i][j].status == 'uncovered') {  //wenn
            this.fieldsDiscovered++;
            this.remainingFields--;
          }
        }
      }
    }
}
