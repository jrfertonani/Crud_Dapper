import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuarios } from '../../models/Usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  btnAcao = "Editar";
  descTitulo = "Editar Usuarios";

  usuarios! : Usuarios;


  constructor(private usuarioService:UsuarioService, private route: ActivatedRoute, private router: Router){};


  ngOnInit(): void {

    console.log(1)

    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.usuarioService.getUsuarioId(id).subscribe(usuarios => {
      console.log(2);
      this.usuarios = usuarios;
    } )

  }

  editarUsuario(usuarios: Usuarios){
    this.usuarioService.editarUsuario(usuarios).subscribe(usuarios => {
      this.router.navigate(['/']);
    })

  }



}
