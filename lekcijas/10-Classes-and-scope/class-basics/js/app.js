// const blogPost = {
//     title: "Title",
//     getTitle: function() {
//         console.log(blogPost.title);
//     }
// }

const carData = [
    {
        brand: "Volvo",
        model: "S60"
    },
    {
        brand: "Audi",
        model: "Q5"
    },
    {
        brand: "BMW",
        model: "X6"
    }
]


class Car {
    constructor(brand) {
        this.brand = brand;
    }

    aboutBrand() {
        return `This is a ${this.brand}`
    }
} 

class Model extends Car {
    constructor(model, brand) {
        super(brand);
        this.model = model;
    }

    aboutModel() {
        return `It is a model ${this.model}.`
    }

    fullDetails() {
        return `${this.aboutBrand()} ${this.aboutModel()}`
    }
}

carData.forEach((vehicle) => {
    const carModel = new Model(vehicle.model, vehicle.brand);
    console.log(carModel.fullDetails());
})