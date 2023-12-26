export class Field {
    status: "uncovered" |"covered" | "flagged" = "covered";
    mine:boolean;
    minesNearby:number=0
    constructor(public row:number,public column:number){
        this.mine=false
    }
}
