import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly apiUrl = `${environment.API_URL}Produto`;

  constructor(private http: HttpClient) {}

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/obter-todos`);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/obter-por-id/${id}`);
  }

  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/criar`, produto);
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/atualizar`, produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletar/${id}`);
  }
}
