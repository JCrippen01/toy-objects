
const toys = [
{
    id: 1,
    manufacturer : "Playmates",
    type: "Action Figure",
    price: 12.99,
    material: "plastic",
    nameofToy: "Ninja Turtle",
    name: "Donatello",
    numberOwned: 1
},

{
    id: 2,
    manufacturer : "Hasbro",
    type: "Action Figure",
    price: 8.99,
    material: "plastic",
    nameofToy: "Snake Eyes V.2",
    numberOwned: 2
},

{
    id: 3,
    manufacturer : "Nintendo",
    type: "Electronics",
    price: 99.99,
    material: "ABS Plastic and Glass",
    nameofToy: "Gameboy",
    numberOwned: 2
}
]
// Basic Example:
for(const toy of toys){
    console.log(toy.price)
}
// Using String Interpolation:
for (const toy of toys) {
    console.log(`$${toy.price}`)
}
const hotWheel ={
id: 4,
manufacturer : "Nintendo",
type: "Car",
price: 3.99,
material: "aluminum",
nameofToy: "hotWheel",
numberOwned: 10
}
const soccerBall ={
    id: 5,
    manufacturer : "Adidas",
    type: "sport ball",
    price: 20.00,
    material: "leather",
    nameofToy: "Das Ball",
    numberOwned: 10
    }
toys.push(hotWheel, soccerBall)
for (const toy of toys) {
    console.log(`$${toy.price}`)
}

for(const toy of toys){
    console.log(`The ${toy.manufacturer} ${toy.nameofToy} costs ${toy.price} dollars.`)
}