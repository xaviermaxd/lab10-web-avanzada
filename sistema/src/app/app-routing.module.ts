import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { AuthGuard } from './authguard'; // Asegúrate de importar el Guardián de Rutas

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent, canActivate: [AuthGuard] },
  { path: 'crear-productos', component: CrearProductosComponent, canActivate: [AuthGuard] }, 
  { path: 'editar-producto/:id', component: EditarProductosComponent, canActivate: [AuthGuard] }, 
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routesInicio, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
