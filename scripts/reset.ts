import { Filter } from './filter';
import { PrintCards } from './printCards';
import { Toy } from './toy';

export const resetValues = (toys: Array<Toy>): void => {
  const resetEl: HTMLElement = <HTMLElement>document.querySelector('.reset');
  const shape = ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'];
  const color = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
  const size = ['большой', 'малый', 'средний'];
  const shapeEl : HTMLElement = <HTMLElement>document.querySelector('.shape');
  const colorEl : HTMLElement = <HTMLElement>document.querySelector('.color');
  const sizeEl : HTMLElement = <HTMLElement>document.querySelector('.size');
  const checkEl : HTMLInputElement = <HTMLInputElement>document.getElementById('checkbox');
  const elems: Array<Element> = [...shapeEl.children, ...colorEl.children, ...sizeEl.children];
  resetEl.addEventListener('click', () => {
    elems.forEach((el: Element) => {
      el.classList.remove('active');
    });
    checkEl.checked = false;
    const reseted = new Filter(toys);
    shape.forEach((item) => { reseted.setShaperemove(item); });
    color.forEach((item) => { reseted.setColorRemove(item); });
    size.forEach((item) => { reseted.setSizeRemove(item); });
    reseted.setFavorit(false);
    reseted.setCountOfToysMin('0');
    reseted.setCountOfToysMax('12');
    reseted.setYearOfToysMin('1940');
    reseted.setYearOfToysMax('2020');
    const allcards: PrintCards = new PrintCards();
    allcards.setCards(reseted.filterAll()).render();
  });
};
