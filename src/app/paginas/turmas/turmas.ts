import { Component } from '@angular/core';
import { AddButton } from "../../componentes/add-button/add-button";
import { CardTurma } from "../../componentes/card-turma/card-turma";

@Component({
  selector: 'app-turmas',
  imports: [AddButton, CardTurma],
  templateUrl: './turmas.html',
  styleUrl: './turmas.css',
})
export class Turmas {}
