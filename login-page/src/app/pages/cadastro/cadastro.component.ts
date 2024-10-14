import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  imports: [NgFor, FormsModule, ReactiveFormsModule],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  universos: any[] = [];
  galaxias: any[] = [];
  planetas: any[] = [];
  mapas: any[] = [];

  constructor(private fb: FormBuilder, private cadastroService: CadastroService) {
    this.cadastroForm = this.fb.group({
      // form controls here
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    universo: ['', Validators.required],
    galaxia: ['', Validators.required],
    planeta: ['', Validators.required],
    mapa: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Inicializa o formulário
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      universo: ['', Validators.required],
      galaxia: ['', Validators.required],
      planeta: ['', Validators.required],
      mapa: ['', Validators.required]
    });

    // Buscar universos do banco de dados e preencher o array
    this.cadastroService.getUniversos().subscribe({
      next: (data) => this.universos = data,
      error: (err) => console.error('Erro ao buscar universos:', err)
    });

    // Buscar galaxias do banco de dados e preencher o array
    this.cadastroService.getGalaxias().subscribe({
      next: (data) => this.galaxias = data,
      error: (err) => console.error('Erro ao buscar galaxias:', err)
    });

    // Buscar planetas do banco de dados e preencher o array
    this.cadastroService.getPlanetas().subscribe({
      next: (data) => this.planetas = data,
      error: (err) => console.error('Erro ao buscar planetas:', err)
    });

    // Buscar mapas do banco de dados e preencher o array
    this.cadastroService.getMapas().subscribe({
      next: (data) => this.mapas = data,
      error: (err) => console.error('Erro ao buscar mapas:', err)
    });
  }

  cadastrarFuncionario(): void {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      // Faz a requisição HTTP para cadastrar o funcionário
      this.cadastroService.cadastrarFuncionario(this.cadastroForm.value).subscribe({
        next: (response) => {
          console.log('Funcionário cadastrado com sucesso:', response);
          // Aqui você pode exibir uma mensagem de sucesso ou redirecionar o usuário
        },
        error: (err) => {
          console.error('Erro ao cadastrar funcionário:', err);
          // Aqui você pode exibir uma mensagem de erro para o usuário
        }
      });
    }
  }
}
