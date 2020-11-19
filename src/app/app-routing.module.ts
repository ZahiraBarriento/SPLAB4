import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { NoAuthGuard } from '../app/guards/no-auth.guard';
import { AuthAdminGuard } from '../app/guards/auth-admin.guard';
import { FormAdminComponent } from './pages/form-admin/form-admin.component';
import { FormMateriaComponent } from './components/form-materia/form-materia.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MateriasCargoComponent } from './components/materias-cargo/materias-cargo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard]},
  {path: 'alta-admin', component: FormAdminComponent, canActivate: [NoAuthGuard]},
  {path: 'alta-materia', component: FormMateriaComponent, canActivate: [AuthAdminGuard]},
  {path: 'inscripcion', component: InscripcionComponent, canActivate: [AuthAdminGuard]},
  {path: 'listado', component: ListadoComponent, canActivate: [AuthAdminGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  {path: 'materias-cargo', component: MateriasCargoComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
