import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/products-list';
import { Container } from '@/components/ui/container';

// export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('14e01de0-b84d-47a0-860b-fbaf225ad4e9');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={'Featured Products'} items={products} />
        </div>
      </div>
    </Container>
  );
}
