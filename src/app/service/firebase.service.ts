import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, updateDoc, limit, orderBy, query, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public fire = inject(Firestore);

  public colSeeds = collection(this.fire, 'semillas');
  public seeds$!: Observable<any[]>;

  // ======================================================================
  // SEMILLAS
  // ======================================================================
  // AÑADIR NUEVA SEMILLA
  public addSemilla(semilla: any) {
    return addDoc(this.colSeeds, semilla);
  }
  // RECOGER LISTADO DE sSEMILLAS 
  public getSeeds() {
    this.seeds$ = collectionData(this.colSeeds) as Observable<any[]>;
    return this.seeds$;
  }
  // EDITAR UNA CANCION
  public editSong(reference: string, semilla: any) {
    updateDoc(doc(this.fire, "semillas", reference), semilla);
  }
  // QUITAR UNA CANCION
  public delSong(reference: any) {
    deleteDoc(doc(this.fire, "semillas", reference));
  }
}
