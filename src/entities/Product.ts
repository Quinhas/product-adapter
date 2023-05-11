interface ProductProps {
  name: string;
  price: number;
}

export class Product {
  private readonly props: ProductProps;

  constructor(props: ProductProps) {
    this.validateName(props.name);
    this.validatePrice(props.price);
    this.props = props;
  }

  private validateName(value: string): void {
    if (value.trim().length === 0) {
      throw new Error('Invalid description');
    }
  }

  private validatePrice(price: number): void {
    if (isNaN(price)) {
      throw new Error('Invalid price');
    }
  }

  public get name() {
    return this.props.name;
  }

  public set name(value: string) {
    this.validateName(value);
    this.props.name = value;
  }

  public get price() {
    return this.props.price;
  }

  public set price(price: number) {
    this.validatePrice(price);
    this.props.price = price;
  }
}
