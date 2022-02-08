import { Toy } from './toy';
import { Settings } from './settings';
import { turnOnGarlnd, garlandOn } from './onOffgarland';
import { RenderSelectToys } from './selectToys';
import { collection } from './counter';

export class TreePage {
  private toys: Array<Toy> = [];

  private mainEl: HTMLElement;

  constructor() {
    this.mainEl = <HTMLElement>document.querySelector('main');
  }

  init(): void {
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    const imgSrc: string = require('../assets/tree/1.png');
    this.mainEl.innerHTML = `
    <div class="page">
            <div class="blur">
                <div class="page-container">
                    <div class="favorites-menu">
                        <div class="snow-audio-container menu-container">
                            <div class="audio-control menu-item"></div>
                            <div class="snow-control menu-item"></div>
                        </div>
                        <div class="tree-container menu-container">
                            <div class="tree menu-item" data-tree="1"></div>
                            <div class="tree menu-item" data-tree="2"></div>
                            <div class="tree menu-item" data-tree="3"></div>
                            <div class="tree menu-item" data-tree="4"></div>
                            <div class="tree menu-item" data-tree="5"></div>
                            <div class="tree menu-item" data-tree="6"></div>
                        </div>
                        <div class="bg-container menu-container">
                            <div class="bg menu-item" data-bg="1"></div>
                            <div class="bg menu-item" data-bg="2"></div>
                            <div class="bg menu-item" data-bg="3"></div>
                            <div class="bg menu-item" data-bg="4"></div>
                            <div class="bg menu-item" data-bg="5"></div>
                            <div class="bg menu-item" data-bg="6"></div>
                            <div class="bg menu-item" data-bg="7"></div>
                            <div class="bg menu-item" data-bg="8"></div>
                            <div class="bg menu-item" data-bg="9"></div>
                            <div class="bg menu-item" data-bg="10"></div>
                        </div>
                        <div class="garland-container menu-container">
                            <div class="garland-btns">
                                <button class="color-btn multicolor-btn" data-color="multicolor"></button>
                                <button class="color-btn red-btn" data-color="red"></button>
                                <button class="color-btn blue-btn" data-color="blue"></button>
                                <button class="color-btn yellow-btn" data-color="yellow"></button>
                                <button class="color-btn green-btn" data-color="green"></button>
                            </div>
                            <div class="onoffswitch">
                                <input type="checkbox" name="onoffswith" class="onoffswitch-checkbox" 
                                id="myonoffswitch" checked>
                                <label class="onoffswitch-label" for="myonoffswitch">
                            <div class="onoffswitch-inner">
                            </div>
                            <div class="onoffswitch-switch"></div>
                        </label>
                            </div>
                        </div>
                    </div>
                    <div class="main-tree-container">
                        <div class="snowflakes hide">
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                        </div>
                        <div class="garland-tree-container"></div>
                        <map name="tree-map">
                    <area shape="poly" 
                    coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,
                    -1,306,75,353,144,399,221,424,359,452,459,496,550,444,664">
                </map>
                        <img src=${imgSrc} class="main-tree" usemap="#tree-map" alt="tree">
                    </div>
                    <div class="favorites-aside">
                        <div class="favorites-container">
                            <div class="favorites-card" data-num="1"></div>
                            <div class="favorites-card" data-num="2"></div>
                            <div class="favorites-card" data-num="3"></div>
                            <div class="favorites-card" data-num="4"></div>
                            <div class="favorites-card" data-num="5"></div>
                            <div class="favorites-card" data-num="6"></div>
                            <div class="favorites-card" data-num="7"></div>
                            <div class="favorites-card" data-num="8"></div>
                            <div class="favorites-card" data-num="9"></div>
                            <div class="favorites-card" data-num="10"></div>
                            <div class="favorites-card" data-num="11"></div>
                            <div class="favorites-card" data-num="12"></div>
                            <div class="favorites-card" data-num="13"></div>
                            <div class="favorites-card" data-num="14"></div>
                            <div class="favorites-card" data-num="15"></div>
                            <div class="favorites-card" data-num="16"></div>
                            <div class="favorites-card" data-num="17"></div>
                            <div class="favorites-card" data-num="18"></div>
                            <div class="favorites-card" data-num="19"></div>
                            <div class="favorites-card" data-num="20"></div>
                        </div>
                        <div class="favorites-decorate">
                            <div class="favorites-decorate-container">
                                <div class="tree-decorate">
                                    
                                </div>
                                <div class="tree-decorate">
                                   
                                </div>
                                <div class="tree-decorate">
                                    
                                </div>
                                <div class="tree-decorate">
                                 
                                </div>
                                <div class="tree-decorate">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const settingsOn = new Settings();
    settingsOn.init();
    turnOnGarlnd();
    garlandOn();
    const renderToys = new RenderSelectToys(collection);
    renderToys.renderCardsToys();
  }
}
