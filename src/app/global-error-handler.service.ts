import { Component, EventEmitter, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {
  dataUpdated : EventEmitter<string> = new EventEmitter();
  constructor(public dialog: MatDialog){
    this.dataUpdated.subscribe((data: Record<string, any>) =>{
      this.openDialog(data.error.error)
    })
  }

  ngOnInit(){
    
  }

  openDialog(message: string = 'Something went wrong, please try agian!'): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<h4>{{data.message}}</h4>',
})
export class DialogOverviewExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}