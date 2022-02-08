type EventDragFunction = (event: DragEvent) => void;

export class DnD {
  private elem : HTMLElement;

  private cardEl: HTMLElement;

  private area: HTMLElement;

  private dropHander: EventDragFunction;

  private dropBack: EventDragFunction;

  private pageEl: HTMLElement;

  private couterEl: HTMLElement;

  startEl: HTMLElement | undefined;

  constructor(elem: HTMLElement) {
    this.elem = <HTMLElement>elem;
    this.cardEl = <HTMLElement>elem.closest('div');
    this.couterEl = <HTMLElement> this.cardEl.firstChild;
    this.area = <HTMLElement>document.querySelector('area');
    this.pageEl = <HTMLElement>document.querySelector('.page-container');
    this.dropHander = this.dragdrop.bind(this);
    this.dropBack = this.putOnPlace.bind(this);
  }

  activeItems(): void {
    this.elem.addEventListener('dragstart', this.dragstart.bind(this));
    this.elem.addEventListener('dragend', this.dragend.bind(this));
  }

  dragstart(event: Event): void {
    this.startEl = <HTMLElement>event.currentTarget;
    this.elem = <HTMLElement>event.target;
    this.pageEl.addEventListener('dragover', DnD.dragOver.bind(this));
    if (this.startEl.parentElement !== this.cardEl) {
      this.area.addEventListener('drop', this.dropHander);
      this.pageEl.addEventListener('drop', this.dropBack);
    } else {
      this.area.addEventListener('drop', this.dropHander);
    }
  }

  dragend(event: DragEvent): void {
    this.elem = <HTMLElement>event.target;
    this.area.removeEventListener('drop', this.dropHander);
    this.pageEl.removeEventListener('drop', this.dropBack);
  }

  static dragOver(event: Event): void {
    event.preventDefault();
  }

  dragdrop(event: DragEvent): void {
    event.stopPropagation();
    this.elem.style.left = `${event.pageX - this.elem.offsetWidth / 2}px`;
    this.elem.style.top = `${event.pageY - this.elem.offsetHeight}px`;
    this.area.appendChild(this.elem);
    this.changeCount();
  }

  putOnPlace():void {
    this.area.removeChild(this.elem);
    this.cardEl.appendChild(this.elem);
    this.elem.style.left = '';
    this.elem.style.top = '';
    this.changeCount();
  }

  changeCount():void {
    const num = this.cardEl.children.length - 1;
    this.couterEl.innerHTML = num.toString();
  }
}
