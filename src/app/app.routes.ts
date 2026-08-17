import { Routes } from '@angular/router';
//Aqui a gente coloca as rotas das páginas (não esquece de colocar alí em baixo também)
import { Home } from './paginas/home/home';
import { Painel } from './paginas/painel/painel';
import { Turmas } from './paginas/turmas/turmas';
import { Alunos } from './paginas/alunos/alunos';
import { Provas } from './paginas/provas/provas';

export const routes: Routes = [
  // Ao entrar na raiz (''), redireciona direto para /home
  { path: '', redirectTo: 'painel', pathMatch: 'full' },

  // Rotas da aplicação
  { path: 'home', component: Home },

  { path: 'painel', component: Painel},
  { path: 'turmas', component: Turmas},
  { path: 'alunos', component: Alunos},
  { path: 'provas', component: Provas},

];