import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-effects-seed-modal',
  standalone: true,
  imports: [MatDialogClose],
  templateUrl: './effects-seed-modal.component.html',
  styleUrl: './effects-seed-modal.component.scss'
})
export class EffectsSeedModalComponent {

  public dialog = inject(MatDialog);

  close(){
    this.dialog.closeAll();
  }

}
