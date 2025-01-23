import { inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { refFromURL } from '@angular/fire/database';
import { ref, Storage, uploadBytes, uploadBytesResumable, getStorage, getDownloadURL, deleteObject } from '@angular/fire/storage';

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
    return getDownloadURL(ref(this.store, 'stl/' + id));
  }

  // BORRAR MODELO
  delStoreSeedModel(id: string) {
    return deleteObject(ref(this.store, 'stl/' + id))
  }
  // BORRAR IMAGEN
  delStoreSeedImage(id: string) {
    return deleteObject(ref(this.store, 'images/' + id))
  }

}
