import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._basket = [];
    makeAutoObservable(this);
  }

  setNewProduct = (value) => {
    console.log("value", value);
    const data = [...this._basket];
    this._basket = [...data, value];
  };

  get basket() {
    return this._basket;
  }

  //   setPage(page) {
  //     this._page = page;
  //   }
  //   setTotalCount(count) {
  //     this._totalCount = count;
  //   }
  //   setClothes(clothes) {
  //     this._clothes = clothes;
  //   }

  //   get clothes() {
  //     return this._clothes;
  //   }

  //   get totalCount() {
  //     return this._totalCount;
  //   }
  //   get page() {
  //     return this._page;
  //   }
  //   get limit() {
  //     return this._limit;
  //   }
}
