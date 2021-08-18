import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { UserStatus, UserTypes } from '../../../models/users/users.interface'
@Component({
  selector: 'app-new',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  registerForm: FormGroup
  submitted = false
  userTypes = UserTypes
  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private api: UsersService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]],
      confirm_password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      type: ['', Validators.required],
      status: ['Ativo', Validators.required]
    }, { validators: this.validatePasswords });
  }

  ngOnInit(): void {
  }
  save() {
    console.log(this.registerForm)
    this.submitted = true
    if (this.registerForm.invalid) {
      this._snackBar.open('Preencha todos os campos', 'Fechar', {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      })
    } else {
      this.api.createUser(this.registerForm.value).subscribe(
        data => {
        },
        error => {
          this._snackBar.open('Erro ao registrar: ' + error.message, 'Fechar', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          })
          console.log(error)
        })
    }
  }
  validatePasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm_password = form.get('confirm_password')?.value;
    return password === confirm_password ? null : { notSame: true }
  }
  get form() { return this.registerForm.controls; }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidParent = !!(
      control
      && control.parent
      && control.parent.invalid
      && control.parent.dirty
      && control.parent.hasError('notSame'));
    return (invalidParent);
  }
}