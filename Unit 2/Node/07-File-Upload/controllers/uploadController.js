const path = require('path');

const uploadProductImage = async (req, res) => {
  // console.log(req.files);
  if (!req.files) {
    throw new Error('No File Added');
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith('image')) {
    throw new Error('Choose an image ONLY!');
  }

  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new Error('Max size is 1MB');
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/',
    productImage.name
  );
  await productImage.mv(imagePath);

  res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
