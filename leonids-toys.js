
const toys = [
{
    id: 1,
    manufacturer : "Playmates",
    type: "Action Figure",
    price: 12.99,
    material: "plastic",
    nameOfToy: "Ninja Turtle",
    name: "Donatello",
    numberOwned: 1
},

{
    id: 2,
    manufacturer : "Hasbro",
    type: "Action Figure",
    price: 8.99,
    material: "plastic",
    nameOfToy: "Snake Eyes V.2",
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
for (const toy of toys) {
    console.log(`$${toy.price}`)
}
