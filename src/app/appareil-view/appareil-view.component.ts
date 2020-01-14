import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumerAll() {
    this.appareilService.ToutAllumer();
  }

  onEteindreAll() {
    this.appareilService.ToutEteindre();
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

}
