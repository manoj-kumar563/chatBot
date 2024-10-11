import { Component ,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IStockData, IStockDetails, stockDataDetails} from './app.config'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  stockExchangeData:IStockData[] =[];
  stockData:IStockDetails[]=[]; 
  selectedStockExchange:string = '';
  selectedStockName:string='';
  stockExchangeSelected: boolean =false;
  stockSelected: boolean =false;
  selectedStockPrice: number = 0;
  ngOnInit(){
      this.stockExchangeData =stockDataDetails;
    }

  fetchStockDetails(stockData : IStockData):void{
  
    if(!this.stockExchangeSelected){
      this.stockExchangeSelected  = true;
      this.selectedStockExchange = stockData.stockExchange ? stockData.stockExchange :'';
      this.fetchStockExchangeDetails(stockData);
    }
  
  }

  fetchStockExchangeDetails(stockData : IStockData):void{
    setTimeout(()=>{ 
      this.stockData = stockData.topStocks ? stockData.topStocks: []
    },500)
  }

  fetchStockPrice(stock :IStockDetails) :void{
    if(!this.stockSelected){
      this.stockSelected  =true;
      this.selectedStockName = stock.stockName;
      setTimeout(()=>{ 
        this.selectedStockPrice  = stock.price;
      },500)
    }
  
    
  }
  clearAll(){
    this.stockExchangeData =[];
    this.stockData=[]; 
    this.selectedStockExchange= '';
    this.selectedStockName='';
    this.stockExchangeSelected =false;
    this.stockSelected=false;
    this.selectedStockPrice = 0;
    this.stockExchangeData =stockDataDetails;
  }
  goBack(){
    this.stockSelected  = false;
    this.selectedStockName = '';
  }
}
