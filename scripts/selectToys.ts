import { data } from '../data';
import { DnD } from './dnd';

export class RenderSelectToys {
  private toysContainer: HTMLElement;

  private selectToys: Array<HTMLElement>;

  constructor(elems: Array<HTMLElement>) {
    this.toysContainer = <HTMLElement>document.querySelector('.favorites-container');
    this.selectToys = elems;
  }

  renderCardsToys(): void {
    const allCards = this.toysContainer.children;
    // eslint-disable-next-line no-restricted-syntax
    for (const card of allCards) {
      const i = Number(card.getAttribute('data-num')) - 1;
      if (this.selectToys.length === 0) {
        const toysNum = data[i].num;
        const countToy = data[i].count;
        RenderSelectToys.addToys(toysNum, countToy, card);
      }
      if (this.selectToys[i]) {
        const toysNum = this.selectToys[i].dataset.num;
        const countToy = data[Number(toysNum) - 1].count;
        RenderSelectToys.addToys(toysNum, countToy, card);
      }
    }
  }

  static addToys(toysNum: string | undefined, countToy:string, card: Element): void {
    const pEl = document.createElement('p');
    pEl.classList.add('favorites-count');
    pEl.textContent = countToy;
    card.append(pEl);
    for (let a = 0; a < Number(countToy); a++) {
      const imgEl = document.createElement('img');
      imgEl.classList.add('favorites-card-img');
      imgEl.setAttribute('draggable', 'true');
      // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
      imgEl.setAttribute('src', require(`../assets/toys/${toysNum}.png`));
      card.append(imgEl);
      const dragebleEl = new DnD(imgEl);
      dragebleEl.activeItems();
    }
  }
}
