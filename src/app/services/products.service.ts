import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;
  productos: Product[] = [];
  productosFiltrado: Product[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
   }
   private cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://papaya-db.firebaseio.com/productos_idx.json')
          .subscribe( (resp: any) => {
            // console.log(resp);
            this.productos = resp;
            this.cargando = false;
            resolve();
            // setTimeout
          });
    });
  }

  getProducto(id: string) {

    return this.http.get(`https://papaya-db.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // callback ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar filtro
      this.filtrarProductos( termino );
    }

    // console.log( this.productosFiltrado );

  }

  private filtrarProductos( termino: string ) {
    // console.log( this.productos );
    this.productosFiltrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
          this.productosFiltrado.push( prod );
        }
      });
  }
}
