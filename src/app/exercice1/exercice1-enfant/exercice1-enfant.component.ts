import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public counterValue: number;
  @Output('changeCounter') private updateCounter: EventEmitter<1 | -1> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public changeCounter(mustAdd: 1 | -1): void {
    this.updateCounter.emit(mustAdd);
  }
}
