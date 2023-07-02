import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component implements OnInit {
  @ContentChild('childRef') public childEl!: ElementRef<HTMLSpanElement>;

  constructor() {}

  ngOnInit() {}
}
