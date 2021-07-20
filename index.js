const fs = require("fs");
const readline = require("readline");

const { parseTile, parseUrl, parseChap, parseLang, parseStatus } = require("./parser");

// read the file sample.txt
const rl = readline.createInterface({
  input: fs.createReadStream("sample.txt"),
});

let books = [];

// write books to a json file
writeToJson = async () => {
  const json = JSON.stringify(books, null, 2);
  fs.writeFile("books.json", json, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

// read the file rl line by line
parseBook = async () => {
  for await (line of rl) {
    Promise.all([
      parseTile(line),
      parseUrl(line),
      parseChap(line),
      parseLang(line),
      parseStatus(line),
    ]).then((values) => {
      books.push({
        tile: values[0],
        url: values[1],
        chap: values[2],
        lang: values[3],
        status: values[4],
      });
    });
  }
  writeToJson();
};

parseBook();