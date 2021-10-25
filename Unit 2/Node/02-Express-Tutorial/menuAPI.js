const express = require('express');
const app = express();

const { menu } = require('./coolerData');

const categories = {};

app
  .get('/', (req, res) => {
    menu.map((item) => {
      if (
        !categories[item.category[0].toUpperCase() + item.category.slice(1)]
      ) {
        categories[item.category[0].toUpperCase() + item.category.slice(1)] =
          [];
      }
      categories[item.category[0].toUpperCase() + item.category.slice(1)].push(
        item.title
      );
    });

    console.log(categories);
    res.json({
      results: [categories],
      message: 'Found',
    });
  })

  .get('/api/v1/item/:id', (req, res) => {
    const { id } = req.params;
    const singleItem = menu.find((product) => {
      return product.id === Number(id);
    });

    if (!singleItem) {
      res.status(404).json({ results: [], message: 'Product not found' });
    }
    res.json({ results: [singleItem], message: 'Found' });
  })

  .get('/api/v1/query', (req, res) => {
    const { category, dir } = req.query;

    let sortedMenu = [...menu];
    if (category) {
      sortedMenu = sortedMenu.filter((item) => {
        return item.category.includes(category);
      });
    }
    if (dir == 'asc') {
      sortedMenu.sort((a, b) => a.price - b.price);
    }
    if (dir == 'dec') {
      sortedMenu.sort((a, b) => b.price - a.price);
    }
    if (sortedMenu.length < 1) {
      return res
        .status(404)
        .json({ results: [], message: 'Product not found' });
    }
    res.json({ results: [sortedMenu], message: 'Found' });
  })

  .all('*', (req, res) => {
    res.send('<h1> 404 page not found </h1>');
  })
  .listen(3000, () => {
    console.log('The server is listening to port 3000');
  });
