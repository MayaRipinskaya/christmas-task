import { Garland } from './garland';

export function garlandOn(): void {
  const turnOnGarland = <HTMLInputElement>document.querySelector('.onoffswitch-checkbox');
  const garlandButtons = <HTMLButtonElement>document.querySelector('.garland-btns');
  garlandButtons.addEventListener('click', (event) => {
    const el: HTMLLIElement = <HTMLLIElement>event.target;
    const colorGarland = <string>el.dataset.color;
    const grlnd = new Garland(colorGarland);
    turnOnGarland.checked = false;
    grlnd.doHTML();
  });
}

export function turnOnGarlnd(): void {
  const turnOnGarland = <HTMLInputElement>document.querySelector('.onoffswitch-checkbox');
  turnOnGarland.addEventListener('click', () => {
    if (turnOnGarland.checked) {
      (document.querySelector('.garland-tree-container') as HTMLElement).innerHTML = '';
    } else if (!turnOnGarland.checked) {
      const grlnd = new Garland('multicolor');
      turnOnGarland.checked = false;
      grlnd.doHTML();
    }
  });
}
