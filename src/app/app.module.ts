import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemDetailComponent } from './components/pages/item-detail/item-detail.component';
import { ItemsComponent } from './components/pages/items/items.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaArticulosComponent,
    DetalleArticuloComponent,
    HeroComponent,
    HomeComponent,
    AboutComponent,
    ItemDetailComponent,
    ItemsComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
