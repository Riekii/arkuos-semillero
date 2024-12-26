import { inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { ref, Storage, uploadBytes, uploadBytesResumable, getStorage, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public store = inject(Storage);
  public fire = inject(FirebaseApp);

  constructor() { }

  // ======================================================================
  // IMAGENES DE SEMILLAS
  // ======================================================================
  // AÑADIR IMAGEN
  addStoreSeedImage(file: any) {
    const storageRef = ref(this.store, 'images/'+file.id)
    uploadBytes(storageRef, file.blob);
  }

  // AÑADIR MODELO
  addStoreSeedModel(file: any) {
    const storageRef = ref(this.store, 'stl/' + file.id);
    uploadBytes(storageRef, file.file);
  }
  // DESCARGAR MODELO
  getStoreSeedModel(id:string){
    getDownloadURL(ref(this.store, 'slt/' + id))
      .then((url) => {
        console.log(url)
      })
      .catch((error) => {
        // Handle any errors
      });
  }

}
