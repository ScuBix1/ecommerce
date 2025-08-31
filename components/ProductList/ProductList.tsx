import Image from 'next/image';
import Link from 'next/link';

const ProductList = () => {
  const products = [
    { image: { src: '/dummy-img.jpg', alt: 'collection dummy' }, name: 'Dummy', price: 19.99 },
    { image: { src: '/dummy-img.jpg', alt: 'collection dumma' }, name: 'Dumma', price: 19.99 },
    { image: { src: '/dummy-img.jpg', alt: 'collection dummu' }, name: 'Dummu', price: 19.99 },
  ];
  return (
    <section id="products" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <Link href="/product/123" key={`ProductList-${index}`}>
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={1000}
              height={1000}
              className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
            />
            <div className="mt-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="font-medium text-sm mt-1">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
