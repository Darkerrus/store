import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфон'},
            {id: 3, name: 'Телевизоры'},
            {id: 4, name: 'Ноутбуки'}

        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},


        ]
        this._device = [
            {id: 1, name: "13 pro max", rating: 5, price: 75000,img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 2, name: "galaxy s22",rating: 5, price: 70000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 3, name: "bespoke", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 4, name: "asdf", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 3, name: "bespoke", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 4, name: "asdf", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 3, name: "bespoke", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
            {id: 4, name: "asdf", rating: 5, price: 99000, img: "https://img.freepik.com/free-vector/focus-spotlight-background-with-black-dark-background_485485-27.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        //будет следить за изменениями переменных и
        //при их изменении компоненты будут перерендериваться
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._device = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._device
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}