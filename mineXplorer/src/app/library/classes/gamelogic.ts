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
        // console.log("row:", this.row,"column:",this.column,"mines:",this.mines)
        for (let x = 0; x < this.row; x++) {
            this.gamefield[x] = [];
            // console.log(x)
            for (let y = 0; y < this.column; y++) {
                // console.log(y)
                this.gamefield[x][y] = new Field(x, y)
            }
        }
        console.log(this.gamefield)
        this.generateMines();
    }

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

    generateMines() {
        let i = 0;
        const fieldsize = this.row * this.column;
        while (i < this.mines) {
            let val = this.getRandomInt(fieldsize);
            let y = Math.floor(val / this.row);
            let x = val % this.row;
            if (!(this.gamefield[x][y].mine)) {
                this.gamefield[x][y].mine = true;
                i++;
                // console.log('new Mine at:',x,y)
            }
        }
    }

    checkwinner():boolean{
        if(this.mines!==this.flaggedField){
            return false
        }
        console.log('mines=flagged')
        for(let x=0;x < this.row;x++){
            for(let y=0;y < this.column;y++){
                if(this.gamefield[x][y].status==='covered'){
                    return false
                }
            }
        }
        return true
    }

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    getStatus(x:number,y:number){
        return this.gamefield[x][y].status
    }

    getMine(x:number,y:number){
        return this.gamefield[x][y].mine
    }

    getMinesNearby  (x:number,y:number){
        return this.gamefield[x][y].minesNearby
    }

    getNearbyMines(x: number, y: number): number {
        if (this.gamefield[x][y].status === 'covered') {
            this.gamefield[x][y].status='uncovered'
            for (let i = 0; i < this.testcases.length; i++) {
                let a = x + (this.testcases[i][0])
                let b = y + (this.testcases[i][1])
                // console.log("a,b",a,b)
                // check if array out of bound/negativ
                if ((a >= 0) && (a < this.row) && (b >= 0) && (b < this.column) && (this.gamefield[a][b].mine)) {
                    this.gamefield[x][y].minesNearby++
                }
            }

        }
        // console.log(this.gamefield[x][y])
        return this.gamefield[x][y].minesNearby
    }
}
