const fs = require("fs");
const FILE_PATH = "./input/links.txt";

module.exports = {


    readContectFromFile() {
        try {
            return fs.readFileSync(FILE_PATH, "utf8");
        } catch (err) {
            console.error(err);
        }
    },

    getArrayFromString(string) {
        return string.split('\r\n');
    },

    getArrayOfProductObjects(array) {
        let arrayOfObjects = [];
        for (const element of array) {
            arrayOfObjects.push({ link: element });
        }
        return arrayOfObjects;
    },

    getLinks() {
        return this.getArrayOfProductObjects(this.getArrayFromString(this.readContectFromFile()));

    }
};