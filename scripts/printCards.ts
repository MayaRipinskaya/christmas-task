import { collection, showcount } from './counter';
import { Toy } from './toy';

export class PrintCards {
  static instance: PrintCards | null = null;

  private actualToys: Array<Toy> = [];

  private container: HTMLElement = <HTMLElement>document.querySelector('.card-container');

  constructor() {
    if (PrintCards.instance == null) {
      this.selectChange();
      PrintCards.instance = this;
    }
    return PrintCards.instance;
  }

  setCards(cards: Array<Toy>): PrintCards {
    this.actualToys = cards;
    return this;
  }

  render(): void {
    this.checkSelect();
    this.container = <HTMLElement>document.querySelector('.card-container');
    this.container.innerHTML = '';
    this.actualToys.forEach((item: Toy) => {
      const toyCard = document.createElement('div');
      toyCard.classList.add('card');
      toyCard.setAttribute('data-num', `${item.num}`);
      // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
      const imgSrc: string = require(`../assets/toys/${item.num}.png`);
      const isfavorit: string = (item.favorite === true) ? 'да' : 'нет';
      toyCard.innerHTML = `
                <h2 class="card-title">${item.name}</h2>
                
                <img  class="card-img" src=${imgSrc} alt="toy">
                <div class="card-description">
                    <p class="count">
                        "Количество:"
                        <span>${item.count}</span>
                    </p>
                    <p class="year">
                        "Год покупки:"
                        <span>${item.year}</span>
                    </p>
                    <p class="shape">
                        "Форма:"
                        <span>${item.shape}</span>
                    </p>
                    <p class="color">
                        "Цвет:"
                        <span>${item.color}</span>
                    </p>
                    <p class="color">
                        "Размер:"
                        <span>${item.size}</span>
                    </p>
                    <p class="favorite">
                        "Любимая:"
                        <span>${isfavorit}</span>
                    </p>
                </div>
                <div class="ribbon"></div>
            </div>
         `;
      this.container.append(toyCard);
      toyCard.addEventListener('click', PrintCards.highlight.bind(this));
    });
  }

  static highlight(event: Event): void {
    if (event) {
      const target: HTMLElement = <HTMLElement>event.currentTarget;
      target.classList.toggle('active');
      if (target.classList.contains('active')) {
        if (collection.length < 20) {
          collection.push(target);
          showcount();
        } else {
          target.classList.remove('active');
          // eslint-disable-next-line no-alert
          alert('Извините, все слоты заполнены');
        }
      } else {
        collection.forEach((item: HTMLElement, i: number) => {
          if (item.dataset.num === target.dataset.num) {
            collection.splice(i, 1);
          }
        });
        showcount();
      }
    }
  }

  checkSelect(): void {
    const { value } = <HTMLInputElement>document.querySelector('.sort-select');
    if (value === 'sort-name-max') {
      this.actualToys.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'sort-name-min') {
      this.actualToys.sort((a, b) => b.name.localeCompare(a.name));
    } else if (value === 'sort-count-max') {
      this.actualToys.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
    } else if (value === 'sort-count-min') {
      this.actualToys.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
    }
  }

  selectChange(): void {
    const selectEl: HTMLElement = <HTMLInputElement>document.querySelector('.sort-select');
    if (selectEl) {
      selectEl.addEventListener('change', () => {
        this.checkSelect();
        this.setCards(this.actualToys);
        this.render();
      });
    }
  }
}
