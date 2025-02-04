import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, updateDoc, limit, orderBy, query, collectionData, where } from '@angular/fire/firestore';
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
  public addSeed(semilla: any) {
    return addDoc(this.colSeeds, semilla);
  }
  // RECOGER LISTADO DE SEMILLAS 
  public getSeeds(filter: string = 'name', value?: string) {
    let q = query(this.colSeeds, orderBy("date", "desc"));
    if(value){
      q = query(this.colSeeds, orderBy("date", "desc"), where(filter, "==", value));
    }
    
    console.log(value, 'BUSCANDO')
    this.seeds$ = collectionData(q, { 
      idField: 'id',
    }) as Observable<any[]>;
    return this.seeds$;
  }
  // EDITAR UNA SEMILLA
  public editSeed(reference: string, semilla: any) {
    return updateDoc(doc(this.fire, "semillas", reference), semilla);
  }
  // QUITAR UNA SEMILLA
  public delSeed(reference: any) {
    deleteDoc(doc(this.fire, "semillas", reference));
  }
}
