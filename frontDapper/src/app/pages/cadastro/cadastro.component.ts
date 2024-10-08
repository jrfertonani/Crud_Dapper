import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { Usuarios } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Usuario"


  constructor(private usuarioService: UsuarioService, private router: Router,){};

  criarUsuario(usuario : Usuarios){

    this.usuarioService.CriarUsuario(usuario).subscribe(usuario =>{
      this.router.navigate(['/']);
    })

  }



}
