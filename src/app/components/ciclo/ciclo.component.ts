import { Component, OnChanges, OnDestroy, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnDestroy, OnChanges {

  @Input() valorInicial: number = 10;

  constructor() {

  }

  ngOnInit(): void {
    this.log('OnInit')
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy')

  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }


  private log (value:string){
    console.log(value)
  }

}
