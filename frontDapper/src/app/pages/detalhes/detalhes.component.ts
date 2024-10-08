import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Usuarios } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

usuario!: Usuarios;


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.usuarioService.getUsuarioId(id).subscribe( usuario => {
     this.usuario =  usuario;
    })
  }



}



