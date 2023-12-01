import Product from "../models/Product.js";

class ProductService {
  async createProduct(productAttributes) {
    const newProduct = new Product(productAttributes);
    const createdProduct = await newProduct.save();
    return createdProduct;
  }

  async getAllProducts() {
    const products = await Product.find();
    return products;
  }

  async getProductById(productId) {
    const product = await Product.findById(productId);
    return product;
  }

  async updateProduct(productId, productAttributes) {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productAttributes,
      { new: true }
    );
    return updatedProduct;
  }

  async deleteProduct(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  }
}

export default new ProductService();
