// En tu componente
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';
import { DataLoginService } from 'src/app/services/data-login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dataLogin: DataLoginService){
      this.registerForm = this.fb.group(
        {
            username: ['', Validators.required],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required],
            email: ['', Validators.required]
        }
      )
  }

  registerUser(){

   const USER: Usuario = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      email: this.registerForm.get('email')?.value
    }

    this.dataLogin.register(USER).subscribe(
      res => {
        // Aquí puedes manejar la respuesta del servidor cuando se crea un nuevo usuario
        // Por ejemplo, podrías redirigir al usuario a la página de inicio de sesión
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    );
  }
}
