const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(Broom){
    const newArray = cats.slice();
    newArray.push(Broom)
    return newArray
}

function prependCat(Arnold){
    const newArray = cats.slice();
    newArray.unshift(Arnold)
    return newArray
}

function removeLastCat(){
    const newArray = cats.slice();
    newArray.pop()
    return newArray
}

function removeFirstCat(){
    const newArray = cats.slice();
    newArray.shift()
    return newArray
}