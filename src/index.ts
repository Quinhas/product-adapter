import { XmlProductAdapter } from './adapters/Product/XmlProductAdapter';
import { Product } from './entities/Product';

/**
 * Product Adapter
 * @namespace Development and Design Patterns
 *
 * @author Felipe Amaral - 601101
 * @author Jose Vicente - 609684
 * @author Lucas Santana - 601314
 * @author Luis Fernando - 579017
 * @author Matheus Colombo - 609307
 */
async function app() {
  const product = new Product({name: 'Test Product', price: 50});

  const xmlProductAdapter = new XmlProductAdapter();
  const xml = xmlProductAdapter.toXml(product);
  console.log(xml);
}

app();
