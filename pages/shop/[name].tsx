import Head from 'next/head';
import { useRouter } from 'next/router';
import NoProduct from '../../component/no-product';
import ProductList from '../../component/product-list';
import TopNavbar from '../../component/top-navbar';
import { introData } from '../../data/intro.data';
import { productData } from '../../data/product.data';

export default function ShopDetail() {
  const router = useRouter();
  const id = router.query.name;
  if (!id) return <></>;
  const title = `姊妹小舖 | ${introData.find((intro) => intro.id === id)?.name}`;
  const productList = productData.filter((product) => product.seller === id);
  if (!productList.length) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <TopNavbar />
        <NoProduct />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <TopNavbar />
        <ProductList products={productList} />
      </>
    );
  }
}
