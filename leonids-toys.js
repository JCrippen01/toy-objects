
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
//adding 5% chapter 8
for(const toy of toys){
    toy.price = Math.ceil(toy.price * (1 + .05))
    console.log(`The ${toy.manufacturer} ${toy.nameofToy} costs ${toy.price} dollars.`)
}


// Chapter 9 Creating a seach by id.
const toyToFind = 3

for (const toy of toys) {
    // Only one phone will cause the condition below to evaluate to true
    if (toy.id === toyToFind){ 
        toy.price = Math.ceil(toy.price * (1 + .05))
        console.log(`The ${toy.manufacturer} ${toy.nameofToy} costs $${toy.price}. No one actually cares tho.`)
    }
}

// Chapter 10
//Add 2 items:
const elmo = {
    manufacturer : "Tyco",
    type: "Plush Doll",
    price: 1503.99,
    material: "Polyester Fiber",
    nameofToy: "Tickle Me Elmo",
    numberOwned: 2
}

const pog = { 
    manufacturer : "Misc",
    type: "Milk Cap",
    price: 3.99,
    material: "Card Board",
    nameofToy: "POGS",
    numberOwned: 225
}
const addtoyToInventory = (toyObject) => {

    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addtoyToInventory(elmo)
addtoyToInventory(pog)

for (const toy of toys) {
    console.log(toys)

}

//for (const toy of toys) {
  //  console.log(`The ${toy.manufacturer} ${toy.nameofToy} costs $${toy.price}. It is made out of ${toy.material}.`)


