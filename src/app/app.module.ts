import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewEmailComponent } from './components/view-email/view-email.component';
import { FormAdminComponent } from './pages/form-admin/form-admin.component';
import { FormMateriaComponent } from './components/form-materia/form-materia.component';
import { ListadoUserComponent } from './components/listado-user/listado-user.component';
import { ListadoMateriaComponent } from './components/listado-materia/listado-materia.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MateriasCargoComponent } from './components/materias-cargo/materias-cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    ViewEmailComponent,
    FormAdminComponent,
    FormMateriaComponent,
    ListadoUserComponent,
    ListadoMateriaComponent,
    InscripcionComponent,
    ListadoComponent,
    MateriasCargoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
