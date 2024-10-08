import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuarios } from '../../models/Usuario';
import { response } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  usuarios: Usuarios[] = [];
  usuariosGeral: Usuarios[] = [];

  constructor(private serviceUsuario: UsuarioService){}


  ngOnInit(): void {

    this.serviceUsuario.list().subscribe((usuarios) => {
      this.usuarios = usuarios;
      console.log(usuarios);
    })
  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nome.toLowerCase().includes(value);
    });
  }

  deletar(id:number | undefined){
    this.serviceUsuario.delete(id).subscribe(usuario => {
      window.location.reload()
    })
  }




}
