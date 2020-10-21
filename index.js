const axios = require("axios");
const cheerio = require("cheerio");

const url = `https://www.amazon.com/Samsung-Unlocked-International-A715F-DS/dp/B084RWF9H1/`;

const getData = async () => {
  const response = await axios.get(url);
  const data = response.data;
  // console.log(data);

  let $ = cheerio.load(data);
  // console.log($);
  let title = $("#productTitle").text().trim();
  let price = $("#priceblock_ourprice").text();
  const item = {
    title,
    price
  };
  console.log(item);
};

getData();
