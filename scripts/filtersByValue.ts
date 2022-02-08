import { Filter } from './filter';
import { PrintCards } from './printCards';
import { Toy } from './toy';

export class FilterByValue {
  private toys: Array<Toy>;

  private block: HTMLLIElement;

  constructor(toys: Array<Toy>) {
    this.toys = toys;
    this.block = <HTMLLIElement>document.querySelector('.filters');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  change() {
    this.block.addEventListener('click', (event: Event) => {
      const target: HTMLInputElement | HTMLButtonElement = <HTMLInputElement | HTMLButtonElement>event.target;
      if (target instanceof HTMLButtonElement) {
        const filtered = new Filter(this.toys);

        target.classList.toggle('active');
        const parent: HTMLDivElement = <HTMLDivElement>target.closest('div');
        const value = parent.className;
        if (target.classList.contains('active')) {
          if (value === 'shape') {
            filtered.setShapeAdd(target.dataset.filter as string);
          } else if (value === 'color') {
            filtered.setColorAdd(target.dataset.filter as string);
          } else if (value === 'size') {
            filtered.setSizeAdd(target.dataset.filter as string);
          }
        } else if (value === 'shape') {
          filtered.setShaperemove(target.dataset.filter as string);
        } else if (value === 'color') {
          filtered.setColorRemove(target.dataset.filter as string);
        } else if (value === 'size') {
          filtered.setSizeRemove(target.dataset.filter as string);
        }
        const changed: PrintCards = new PrintCards();
        changed.setCards(filtered.filterAll()).render();
      }
      if (target instanceof HTMLInputElement) {
        if (target.checked) {
          const filtered = new Filter(this.toys);
          filtered.setFavorit(true);
          const onlyFavorit: PrintCards = new PrintCards();
          onlyFavorit.setCards(filtered.filterAll()).render();
        }
        if (!target.checked) {
          const filtered = new Filter(this.toys);
          filtered.setFavorit(false);
          const allselected: PrintCards = new PrintCards();
          allselected.setCards(filtered.filterAll()).render();
        }
      }
    });
  }
}
