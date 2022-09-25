import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataclientService {

  url='http://127.0.0.1:3000/client/';

  constructor(private http : HttpClient ) { }

   create (dep : any)
   {
    return this.http.post(this.url+'ajout',dep);
   }

   getAll(){
    return this.http.get(this.url+'all');
   }

   getById(id : any){
    return this.http.get(this.url+'getbyid/'+ id);
   }
   delete(id : any){
    return this.http.delete(this.url+'delete/'+id);
   }
   update (id : any , data :any) {
    return this.http.put(this.url+'update/'+id , data);
   }
}
