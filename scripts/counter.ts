export const collection: Array<HTMLElement> = [];
export const showcount = (): void => {
  const counterEl: HTMLElement = <HTMLElement>document.querySelector('.select span');
  counterEl.textContent = collection.length.toString();
};
