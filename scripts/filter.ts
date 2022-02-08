import { Toy } from './toy';

export class Filter {
  static instance: Filter | null = null;

  private actualToys: Array<Toy> = [];

  private countOfToysMin = 0;

  private countOfToysMax = 0;

  private yearOfToysMin = 0;

  private yearOfToysMax = 0;

  private shape: Array<string> = [];

  private color: Array<string> = [];

  private size: Array<string> = [];

  private favorite = false;

  constructor(actualtoys: Array<Toy>) {
    if (Filter.instance == null) {
      this.actualToys = actualtoys;
      this.countOfToysMin = parseInt((<HTMLInputElement>document.getElementById('output-0')).value, 10);
      this.countOfToysMax = parseInt((<HTMLInputElement>document.getElementById('output-1')).value, 10);
      this.yearOfToysMin = parseInt((<HTMLInputElement>document.getElementById('output-2')).value, 10);
      this.yearOfToysMax = parseInt((<HTMLInputElement>document.getElementById('output-3')).value, 10);
      this.shape = [];
      this.color = [];
      this.size = [];
      this.favorite = false;
      Filter.instance = this;
    }

    return Filter.instance;
  }

  setCountOfToysMin = (num: string): void => {
    this.countOfToysMin = parseInt(num, 10);
  };

  setCountOfToysMax = (num: string): void => {
    this.countOfToysMax = parseInt(num, 10);
  };

  setYearOfToysMin = (num: string): void => {
    this.yearOfToysMin = parseInt(num, 10);
  };

  setYearOfToysMax = (num: string): void => {
    this.yearOfToysMax = parseInt(num, 10);
  };

  setShapeAdd = (value: string): void => {
    this.shape.push(value);
  };

  setShaperemove = (currentValue: string): void => {
    this.shape.forEach((item, i: number) => {
      if (item === currentValue) {
        this.shape.splice(i, 1);
      }
    });
  };

  setColorAdd = (value: string): void => {
    this.color.push(value);
  };

  setColorRemove = (currentValue: string): void => {
    this.color.forEach((item, i) => {
      if (item === currentValue) {
        this.color.splice(i, 1);
      }
    });
  };

  setSizeAdd = (value: string): void => {
    this.size.push(value);
  };

  setSizeRemove = (currentValue: string): void => {
    this.size.forEach((item, i) => {
      if (item === currentValue) {
        this.size.splice(i, 1);
      }
    });
  };

  setFavorit = (value: boolean): void => {
    this.favorite = value;
  };

  filterAll(): Array<Toy> {
    let items = this.actualToys;
    items = this.filterByYear(items);
    items = this.filterByCount(items);
    items = this.filterByShape(items);
    items = this.filterByColor(items);
    items = this.filterBySize(items);
    items = this.isFvoriteFilter(items);
    return items;
  }

  filterByCount(items = this.actualToys): Array<Toy> {
    // eslint-disable-next-line max-len
    return items.filter((item) => parseInt(item.count, 10) >= this.countOfToysMin && parseInt(item.count, 10) <= this.countOfToysMax);
  }

  filterByYear(items = this.actualToys): Array<Toy> {
    // eslint-disable-next-line max-len
    return items.filter((item) => parseInt(item.year, 10) >= this.yearOfToysMin && parseInt(item.year, 10) <= this.yearOfToysMax);
  }

  filterByShape(items = this.actualToys): Array<Toy> {
    if (this.shape.length === 0) {
      return items;
    }
    const newToys: Array<Toy> = [];
    this.shape.forEach((value) => {
      for (let i = 0; i < items.length; i++) {
        if (value === items[i].shape) {
          newToys.push(items[i]);
        }
      }
    });
    return newToys;
  }

  filterByColor(items = this.actualToys): Array<Toy> {
    if (this.color.length === 0) {
      return items;
    }
    const newToys: Array<Toy> = [];
    this.color.forEach((value) => {
      for (let i = 0; i < items.length; i++) {
        if (value === items[i].color) {
          newToys.push(items[i]);
        }
      }
    });
    return newToys;
  }

  filterBySize(items = this.actualToys): Array<Toy> {
    if (this.size.length === 0) {
      return items;
    }
    const newToys: Array<Toy> = [];
    this.size.forEach((value: string) => {
      for (let i = 0; i < items.length; i++) {
        if (value === items[i].size) {
          newToys.push(items[i]);
        }
      }
    });
    return newToys;
  }

  isFvoriteFilter(items = this.actualToys): Array<Toy> {
    if (this.favorite === false) {
      return items;
    }
    return items.filter((item) => item.favorite === true);
  }
}
