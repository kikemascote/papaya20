import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('si jala!');
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
     this.http.get('assets/data/pages-data.json')
        .subscribe( (resp: PageInfo) => {
          this.cargada = true;
          this.info = resp;
        });
   }

   private cargarEquipo() {
    this.http.get('https://papaya-db.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.equipo = resp;
      // console.log(resp);
    });
   }
}
