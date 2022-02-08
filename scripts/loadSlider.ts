import noUiSlider, { target } from 'nouislider';
import { Filter } from './filter';
import { PrintCards } from './printCards';
import { Toy } from './toy';

export const loadSlider = (toys: Array<Toy>): void => {
  const limitSlider: target = <target>document.getElementById('range-slider');
  const yearSlider: target = <target>document.getElementById('year-slider');
  noUiSlider.create(limitSlider, {
    start: [0, 12],
    limit: 12,
    step: 1,
    behaviour: 'drag',
    connect: true,
    range: {
      min: 0,
      max: 12,
    },
  });

  const output0: HTMLInputElement = <HTMLInputElement>document.getElementById('output-0');
  const output1: HTMLInputElement = <HTMLInputElement>document.getElementById('output-1');
  const outtputs: HTMLInputElement[] = [output0, output1];

  if (limitSlider.noUiSlider) {
    limitSlider.noUiSlider.on('update', (values: (string | number)[], handle: string | number): void => {
      outtputs[<number>handle].value = Math.round(<number>values[<number>handle]).toString();
      const filtred = new Filter(toys);
      filtred.setCountOfToysMin(output0.value);
      filtred.setCountOfToysMax(output1.value);
      const selectBycount: PrintCards = new PrintCards();
      selectBycount.setCards(filtred.filterAll()).render();
    });
  }

  noUiSlider.create(yearSlider, {
    start: [1940, 2020],
    limit: 100,
    step: 10,
    behaviour: 'drag',
    connect: true,
    range: {
      min: 1940,
      max: 2020,
    },
  });
  const output2: HTMLInputElement = <HTMLInputElement>document.getElementById('output-2');
  const output3: HTMLInputElement = <HTMLInputElement>document.getElementById('output-3');
  const outtputs2: HTMLInputElement[] = [output2, output3];

  if (yearSlider.noUiSlider) {
    yearSlider.noUiSlider.on('update', (values: (string | number)[], handle: string | number): void => {
      outtputs2[<number>handle].value = Math.round(<number>values[<number>handle]).toString();
      const filtred = new Filter(toys);
      filtred.setYearOfToysMin(output2.value);
      filtred.setYearOfToysMax(output3.value);
      const selectByyear: PrintCards = new PrintCards();
      selectByyear.setCards(filtred.filterAll()).render();
    });
  }

  // reset slider

  const reset: HTMLLIElement = <HTMLLIElement>document.querySelector('.reset');
  reset.addEventListener('click', () => {
    output0.value = (0).toString();
    output1.value = (12).toString();
    output2.value = (1940).toString();
    output3.value = (2020).toString();
    if (limitSlider.noUiSlider) {
      limitSlider.noUiSlider.updateOptions({
        start: [0, 12],
      }, false);
    }
    if (yearSlider.noUiSlider) {
      yearSlider.noUiSlider.updateOptions({
        start: [1940, 2020],
      }, false);
    }
  });
};
