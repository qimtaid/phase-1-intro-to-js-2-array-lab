// Write your solution here!

// index.js

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

module.exports = {
    cats,
    destructivelyAppendCat
};
