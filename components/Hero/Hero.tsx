import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold">
          Élégance intemporelle
        </h1>
        <p className="text-[#495057] mt-4">
          Découvrez notre collection exclusive de montres haut de gamme, conçues pour ceux qui
          apprécient la sophistication et la précision.
        </p>

        <Link href="#product">
          <button className="mt-8 bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer">
            Découvrir la Collection
          </button>
        </Link>
      </div>

      <div>
        <Image src="/hero-img.png" alt="img" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
