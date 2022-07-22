// Code your solution here
const drivers = []


function findMatching(collection, name) {
    return collection.filter (
        (match) => match.toLowerCase() === name.toLowerCase()
    )
};


function fuzzyMatch(collection, letters) {
    return collection.filter (
        (match) => match.toLowerCase().indexOf(letters.toLowerCase()) === 0
       
    )
}


function matchName(collection, name) {
    return collection.filter (
        ((match) => match.name === name)
    )
}