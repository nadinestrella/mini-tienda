import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // 1. Importa cosas de Forms

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private contact = inject(FormBuilder);

  contactForm = this.contact.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmitContact() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log('Formulario enviado correctamente', this.contactForm.value);
      alert('Gracias por contactarnos');
      this.contactForm.reset();
    } else {
      console.error('El formulario de contacto es invalido');
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }

  getError(controlName: string): string | null {
    const control = this.contactForm.get(controlName);
    if (!control || !control.errors || !(control.dirty || control.touched)) return null;

    if (control.errors['required']) return 'Este campo es obligatorio';
    if (control.errors['minlength'])
      return `Debe de tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;
    if (control.errors['email']) return 'El formato del email no es válido';

    return null;
  }
}
