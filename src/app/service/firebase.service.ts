import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, updateDoc, limit, orderBy, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore: Firestore = inject(Firestore);

  public colSemillas = collection(this.firestore, 'semillas');

  // ======================================================================
  // SEMILLAS
  // ======================================================================
  // AÑADIR NUEVA SEMILLA
  public addSemilla(semilla: any) {
    return addDoc(this.colSemillas, semilla);
  }
  // RECOGER LISTADO DE sSEMILLAS 
  public getSemilla() {
    let semQuery = query(this.colSemillas, orderBy("time", "desc"), limit(100));
    return collection(this.firestore, 'semillero')
  }
  // EDITAR UNA CANCION
  public editSong(reference: string, semilla: any) {
    updateDoc(doc(this.firestore, "semillas", reference), semilla);
  }
  // QUITAR UNA CANCION
  public delSong(reference: any) {
    deleteDoc(doc(this.firestore, "semillas", reference));
  }
}
