import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = 'Valorant-FE';

  constructor(private _dialog: MatDialog) {} 

  openDialog(): void {
     const dialogRef = this._dialog.open(AgentDialogComponent, { 
      // Optionally pass data to the dialog 
      // data: { /* your data here */ } 
      }); 
     
      dialogRef.afterClosed().subscribe(result => { 
      console.log(`Dialog result: ${result}`); 
     });
    }
}
