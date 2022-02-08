export class Settings {
  private treeEls: HTMLElement;

  private mainTreeEl: HTMLElement;

  private bgEl: HTMLElement;

  private containerEl: HTMLElement;

  private audio: HTMLAudioElement;

  private audioEl: HTMLElement;

  private snowEl: HTMLElement;

  private snowControl: HTMLElement;

  constructor() {
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    const src: string = require('../assets/audio/audio.mp3');
    this.audio = new Audio(src);
    this.mainTreeEl = <HTMLElement>document.querySelector('.main-tree');
    this.treeEls = <HTMLElement>document.querySelector('.tree-container');
    this.bgEl = <HTMLElement>document.querySelector('.bg-container');
    this.containerEl = <HTMLElement>document.querySelector('.main-tree-container');
    this.audioEl = <HTMLElement>document.querySelector('.snow-audio-container .audio-control');
    this.snowEl = <HTMLElement>document.querySelector('.snowflakes');
    this.snowControl = <HTMLElement>document.querySelector('.snow-audio-container .snow-control');
  }

  init(): void {
    this.load();
    this.treeListener();
    this.bgListener();
    this.soundListener();
    this.snowListener();
  }

  private load(): void {
    if (typeof localStorage.getItem('settings.tree') === 'string') {
      this.setTree(<string>localStorage.getItem('settings.tree'));
    }

    if (typeof localStorage.getItem('settings.bg') === 'string') {
      this.setBg(<string>localStorage.getItem('settings.bg'));
    }
  }

  private soundListener(): void {
    this.audioEl.addEventListener('click', () => {
      if (this.audioEl.classList.contains('active')) {
        this.audioEl.classList.remove('active');
        this.audio.pause();
        this.audio.currentTime = 0;
      } else {
        this.audioEl.classList.add('active');
        this.audio.play();
      }
    });
  }

  private snowListener(): void {
    this.snowControl.addEventListener('click', () => {
      if (this.snowControl.classList.contains('active')) {
        this.snowControl.classList.remove('active');
        this.snowEl.classList.add('hide');
      } else {
        this.snowControl.classList.add('active');
        this.snowEl.classList.remove('hide');
      }
    });
  }

  private treeListener(): void {
    this.treeEls.addEventListener('click', (event) => {
      const target: HTMLElement = <HTMLElement>event.target;
      if (target.classList.contains('tree')) {
        this.setTree(<string>target.getAttribute('data-tree'));
      }
    });
  }

  private setTree(currentNumber: string) {
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    const imgSrc: string = require(`../assets/tree/${currentNumber}.png`);
    this.mainTreeEl.setAttribute('src', imgSrc);
    window.localStorage.setItem('settings.tree', <string>currentNumber);
  }

  private bgListener(): void {
    this.bgEl.addEventListener('click', (event) => {
      const target: HTMLElement = <HTMLElement>event.target;
      if (target.classList.contains('menu-item')) {
        this.setBg(<string>target.getAttribute('data-bg'));
      }
    });
  }

  private setBg(currentNumber: string): void {
    // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
    const imgSrc: string = require(`../assets/bg/${currentNumber}.jpg`);
    this.containerEl.style.backgroundImage = `url("${imgSrc}")`;
    window.localStorage.setItem('settings.bg', <string>currentNumber);
  }
}
