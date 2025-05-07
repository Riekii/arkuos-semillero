import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'dropzone',
  standalone: true,
  imports: [NgxDropzoneModule, CommonModule],
  templateUrl: './dropzone.component.html',
  styleUrl: './dropzone.component.scss'
})
export class DropzoneComponent {
  
  @Input('logoName') fileUpdated: any;
  @Input('b64') imageBase64!: string;
  @Input('type') type!: number;

  @Output() imageEmitter = new EventEmitter<{
    b64?: any, 
    type: string, 
    blob?: Blob,
    file?: File
  }>();

  public imgType: string = 'png';
  public fileType!: string;

  // DRAGNDROP
  public imgTypes = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];
  onSelect(event: any) {
    const file: File = event.addedFiles[0];

    if (this.imgTypes.includes(event.addedFiles[0].type)) {
      this.fileUpdated = event.addedFiles[0];
      this.imgType = file.name.split('.')[1];
      if (file) {
        this.convertToBase64(file);
      }
    } 
    else {
      if(this.type === 1){
        this.fileUpdated = event.addedFiles[0];
        
        let fileToSend = new File([file], file.name, {
          type: 'model/stl',
        });

        this.imageEmitter.next(
          {
            type: 'stl',
            file: fileToSend
          }
        );
      }
    }

  }

  private convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageBase64 = reader.result as string;
      this.imageEmitter.next(
        {
          b64: this.imageBase64,
          blob: file,
          type: this.imgType
        }
      );
    };
    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error);
    };
    reader.readAsDataURL(file); // Convierte el archivo a Base64
  }

  onRemove() {
    this.fileUpdated = undefined;
  }
}
