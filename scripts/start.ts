import { OpenMainPage } from './main-page';
import { TreePage } from './tree';

export class Application {
  mainEl: HTMLElement | null;

  constructor() {
    this.mainEl = document.querySelector('main');
  }

  init(): void {
    const template = `
    <div class="page start-page">
            <div class="ball ball1"></div>
            <div class="ball ball2"></div>
            <h1 class="start-page-title">
                Новогодняя игра
                <span>Наряди  ёлку</span>
            </h1>
            <button class="switch-start-page">Начать</button>
        </div>
    `;
    if (this.mainEl) {
      this.mainEl.innerHTML = template;
    }
    Application.startListener();
  }

  static startListener(): void {
    const startEl : HTMLElement | null = document.querySelector('.switch-start-page');
    const treeEl : HTMLElement | null = document.querySelector('.logo');
    const treePage : HTMLElement | null = document.querySelector('.treePage');
    const toysPage: HTMLElement | null = document.querySelector('.toysPage');
    if (treeEl) {
      treeEl.addEventListener('click', () => {
        const application = new Application();
        application.init();
      });
    }
    if (startEl) {
      startEl.addEventListener('click', () => {
        const mainPage = new OpenMainPage();
        mainPage.init();
      });
    }
    if (toysPage) {
      toysPage.addEventListener('click', () => {
        const mainPage = new OpenMainPage();
        mainPage.init();
      });
    }
    if (treePage) {
      treePage.addEventListener('click', () => {
        const trepage = new TreePage();
        trepage.init();
      });
    }
  }
}
