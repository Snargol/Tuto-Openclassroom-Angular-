export class AppareilService {
  appareils = [
    {
      name: 'Four à microonde',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  ToutAllumer() {
    for (const app of this.appareils) {
      app.status = 'allumé';
    }
  }

  ToutEteindre() {
    for (const app of this.appareils) {
      app.status = 'éteint';
    }
  }

  Allumer(index: number) {
    this.appareils[index].status = 'allumé';
  }

  Eteindre(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
