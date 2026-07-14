import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productApi } from "../../services/product";

import ProductHero from "./ProductHero";
import ProductOverview from "./ProductOverview";
import ProductTechnology from "./ProductTechnology";
import ProductVideo from "./ProductVideo";

export default function ProductDetail() {
  const { productSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productApi.getBySlug(productSlug);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productSlug]);

  if (loading) {
    return (
      <section className="py-32 text-center text-[#6B5F4A]">
        Loading...
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-32 text-center text-[#6B5F4A]">
        Product not found.
      </section>
    );
  }

  return (
    <>
      <ProductHero product={product} />

      <ProductOverview
        descriptions={product.descriptions}
        galleries={product.galleries}
        specifications={product.productSpecifications}
      />

      <ProductTechnology
        technologies={product.productTechnologies}
      />

      <ProductVideo
        videoUrl={product.videoUrl}
      />
    </>
  );
}