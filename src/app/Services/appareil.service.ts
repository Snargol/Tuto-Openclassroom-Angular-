import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {

  }

  saveAppareilToServer() {
    this.httpClient
      .put('https://http-client-demo-16f41.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {console.log('terminé'); },
        (error) => {console.log('erreur' + error); }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  ToutAllumer() {
    for (const app of this.appareils) {
      app.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  ToutEteindre() {
    for (const app of this.appareils) {
      app.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  Allumer(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  Eteindre(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
