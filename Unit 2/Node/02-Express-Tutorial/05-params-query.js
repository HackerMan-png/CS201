const express = require('express');
const app = express();
const { products } = require('./data');

app
  .get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">Products</a>');
  })
  .get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image: img } = product;
      return { name, id, img };
    });
    res.json(newProducts);
  })

  //? This is a params search
  .get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => {
      return product.id === Number(id);
    });

    if (!singleProduct) {
      res.status(404).json({ results: [], message: 'Product not found' });
    }
    res.json({ results: [singleProduct], message: 'Found' });
  })

  //? Query search for data
  .get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    // ... creates a new nonmutable copy
    let sortedProducts = [...products];
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
      return res.json({ results: [], message: 'Product not found' });
    }
    res.json({ results: sortedProducts, message: 'Found' });
  })

  .all('*', (req, res) => {
    res.status(404).send('<h1> 404 page not found </h1>');
  })
  .listen(3000, () => {
    console.log('Server is listening at port 3000');
  });
