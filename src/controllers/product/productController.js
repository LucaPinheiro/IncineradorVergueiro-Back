import ProductService from "../../services/productService.js";
import Product from "../../models/Product.js";

class ProductController {
  async createProduct(req, res) {
    try {
      const productAttributes = req.body;
      console.log(
        "Recebido um pedido para criar um produto:",
        productAttributes
      );

      const newProduct = new Product(productAttributes);
      const savedProduct = await newProduct.save();

      console.log("Produto criado com sucesso:", savedProduct);

      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Erro ao criar um produto:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async getProductById(req, res) {
    const productId = req.params.id;
    try {
      const product = await ProductService.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error("Erro ao buscar um produto por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async updateProduct(req, res) {
    const productId = req.params.id;
    const updatedAttributes = req.body;
    try {
      const updatedProduct = await ProductService.updateProduct(
        productId,
        updatedAttributes
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Erro ao atualizar um produto por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }

  async deleteProduct(req, res) {
    const productId = req.params.id;
    try {
      const result = await ProductService.deleteProduct(productId);
      if (!result) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Erro ao deletar um produto por ID:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
}

export default ProductController;
