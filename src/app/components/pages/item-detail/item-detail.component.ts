import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
// import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  producto: ProductDescription | undefined;
  pid: string | undefined;

  constructor( private route: ActivatedRoute, public productoService: ProductsService) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
           // console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: any) => {
                this.pid = parametros['id'];
                // console.log(producto);
                this.producto = producto;
              });
        });
  }

}
