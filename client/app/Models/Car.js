export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return /*html*/`
    <div class="card car-card d-flex flex-column col-3 m-3">
        <div class="row">
            <img src="${this.imgUrl}">
        </div>
        <div class="row">
            <div class="d-flex flex-column">
                <span>Make: ${this.make}</span>
                <span>Model: ${this.model}</span>
                <span>Year: ${this.year}</span>
                <span>Price: ${this.price}</span>
                <span>Description: ${this.description}</span>
            </div>
        </div>
    </div>
    `
  }
}