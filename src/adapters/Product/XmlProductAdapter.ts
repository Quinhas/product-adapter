import { Product } from "src/entities/Product";

export class XmlProductAdapter {
  toXml(product: Product) {
    return `
      <product>\n
        <name>${product.name}</name>\n
        <price>${product.price}</price>\n
      </product>\n
    `;
  }
}
