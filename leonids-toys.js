
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
/*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array, 
    //The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. 
    //If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. 
    //Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
    const lastIndex = toys.length - 1
    // Get the last object in the array
    const currentLastToy = toys[lastIndex]
    // Get id property value of last toy
    const maxId = currentLastToy.id
    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewToy = maxId + 1
/*
        Step 3: Add the id property to the toy object
    */
    toyObject.id = idForNewToy
    /*
        Step 4: Add the phone object to the array
    */
    toys.push(toyObject)
}

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `phoneObject`
    parameter for use in the function.
*/
addtoyToInventory(elmo, pog)

for (const toy of toys) {
    console.log(`The ${toy.manufacturer} ${toy.nameofToy} costs $${toy.price}. It is made out of ${toy.material}.`)
}

