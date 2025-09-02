import Hero from '@/components/Hero/Hero';
import ProductList from '@/components/ProductList/ProductList';

export default function Home() {
  return (
    <main className="bg-[#F8F9FA]">
      <Hero />
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">Les produits</h2>
      <ProductList />
    </main>
  );
}
