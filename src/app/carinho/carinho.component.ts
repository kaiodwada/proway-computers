import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css']
})
export class CarinhoComponent implements OnInit {

  itensCarrinho : IProdutoCarrinho [] =[]

  total = 0

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho()
    this.calcularTotal()
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removeProduto(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
    this.carrinhoService.removerProduto(produtoId)
    this.calcularTotal()
  }
  comprar(){
    alert("Compra finalizada!")
    this.carrinhoService.limparCarrinho()
    this.router.navigate(['produtos'])
  }
}
