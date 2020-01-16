import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Four à microonde',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

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
}
