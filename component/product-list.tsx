import Image from 'next/image';
import Link from 'next/link';
import { ProductModel } from '../model/product.model';

interface Prop {
  products: ProductModel[];
}

export default function ProductList({ products }: Prop) {
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 d-flex align-items-stretch">
            <Link href="/"></Link>
            <div className="card my-3 border-0" style={{ backgroundColor: '#a7b7c7', minWidth: '100%' }}>
              <Image
                className="img-fluid card-img-top bg-light"
                src="/product/product-1.webp"
                width={500}
                height={500}
                alt={''}
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body">
                <h4 className="card-title mt-2">{product.productName}</h4>
                <h4 className="card-title text-danger">${product.productPrice}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
