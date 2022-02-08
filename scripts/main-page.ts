import { loadSlider } from './loadSlider';
import { PrintCards } from './printCards';
import { data } from '../data';
import { FilterByValue } from './filtersByValue';
import { resetValues } from './reset';
import { Toy } from './toy';

export class OpenMainPage {
  private toys: Array<Toy>;

  private mainEl: HTMLElement;

  constructor() {
    this.mainEl = <HTMLElement>document.querySelector('main');
    this.toys = [...data];
  }

  init():void {
    this.mainEl.innerHTML = `
        <div class="page">
            <div class="blur">
                <div class="controls">
                    <div class="filters">
                        <div class="controls-title">Фильтры по значению</div>
                        <div class="shape">
                            "Форма:"
                            <button data-filter="шар"></button>
                            <button data-filter="колокольчик"></button>
                            <button data-filter="шишка"></button>
                            <button data-filter="снежинка"></button>
                            <button data-filter="фигурка"></button>
                        </div>
                        <div class="color">
                            "Цвет:"
                            <button data-filter="белый"></button>
                            <button data-filter="желтый"></button>
                            <button data-filter="красный"></button>
                            <button data-filter="синий"></button>
                            <button data-filter="зелёный"></button>
                        </div>
                        <div class="size">
                            "Размер:"
                            <button data-filter="большой"></button>
                            <button data-filter="средний"></button>
                            <button data-filter="малый"></button>
                        </div>
                        <div class="favorite-container">
                            "Только любимые"
                            <div class="form-group">
                                <input type="checkbox" class="favorite-input" id="checkbox">
                                <label for="checkbox" class="favorite-input-label"></label>
                            </div>
                        </div>
                    </div>
                    <div class="range">
                        <div class="controls-title">Фильтры по диапазону</div>
                        <div class="count">
                            <span class="control-span">Количество экземпляров</span>
                            <div class="count-slider-container">
                                <output class="slider-output" id="output-0">1</output>
                                <div class="count-slider" id="range-slider"></div>
                                <output class="slider-output"id="output-1">12</output>

                            </div>
                        </div>
                        <div class="year">
                            <span class="control-span">Год приобретения</span>
                            <div class="year-slider-container">
                                <output class="slider-output" id="output-2">1940</output>
                                <div class="count-slider" id="year-slider"></div>
                                <output class="slider-output" id="output-3">2020</output>
                            </div>
                        </div>
                    </div>
                    <div class="sort">
                        <div class="controls-tile">Сортировка</div>
                        <select class="sort-select">
                            <option value="sort-name-max">По названию от "A" до "Я"</option>
                            <option value="sort-name-min">По названию от "Я" до "А"</option>
                            <option value="sort-count-max">По году по возрастанию</option>
                            <option value="sort-count-min">По году по убыванию</option>
                        </select>
                        <button class="reset">Сбор фильтров</button>
                    </div>
                </div>
                <div class="card-container"></div>
            </div>
        </div>
        `;
    loadSlider(this.toys);
    const startCrds: PrintCards = new PrintCards();
    startCrds.setCards(this.toys).render();
    const values = new FilterByValue(this.toys);
    values.change();
    resetValues(this.toys);
  }
}
