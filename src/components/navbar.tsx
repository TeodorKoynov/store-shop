import Link from 'next/link';
import { getCategories } from '@/actions/get-categories';
import { MainNav } from '@/components/main-nav';
import { NavbarActions } from '@/components/navbar-actions';
import { Container } from '@/components/ui/container';

export type NavbarProps = unknown;

export const Navbar: React.FC<NavbarProps> = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href={'/'} className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold uppercase">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};
