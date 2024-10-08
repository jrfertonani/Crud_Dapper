import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Usuarios } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  @Input() btnAcao!: string;

  @Input() descTitulo!: string;

  @Input() dadosUsuario: Usuarios | null = null;

  @Output() onSubmit = new EventEmitter<Usuarios>();

  usuarioForm!: FormGroup;

  ngOnInit(): void {
    console.log(3);

    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : ''),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : ''),
      salario: new FormControl(
        this.dadosUsuario ? this.dadosUsuario.salario : ''
      ),
      cpf: new FormControl(this.dadosUsuario ? this.dadosUsuario.cpf : ''),
      situacao: new FormControl(
        this.dadosUsuario ? this.dadosUsuario.situacao : true
      ),
    });
  }

  submit() {
    this.onSubmit.emit(this.usuarioForm.value);
  }
}
