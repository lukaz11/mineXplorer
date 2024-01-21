import { Component,Output,EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameLauncherComponent } from '../game-launcher/game-launcher.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  constructor(public dialogRef: MatDialogRef<ResultComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public gameservice : GameService){
    //this.game_launcher.newGame()
  }

  closeDialog(restart:boolean){
    this.dialogRef.close(restart);
  }
}
