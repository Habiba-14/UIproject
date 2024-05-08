import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ElearningService {

  constructor(private afs: AngularFirestore) {}
  
}

//   addProduct(product: Product) {
  
//   const productsCoolection = collection(this.fireStore, 'products');
  
//   addDoc ((parameter) product: Product
  
//   title: product.title,
  
//   description: product.description
  
//   });

// }



