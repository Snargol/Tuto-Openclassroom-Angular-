import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../Services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'darkred';
    }
  }

  allumer() {
    this.appareilService.Allumer(this.indexOfAppareil);
  }

  eteindre() {
    this.appareilService.Eteindre(this.indexOfAppareil);
  }

  getStatus() {
    return this.appareilStatus;
  }

}
