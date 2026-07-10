import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productApi } from "../../services/product";

import ProductHero from "./ProductHero";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";
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
      <section className="py-32 text-center">
        Loading...
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-32 text-center">
        Product not found.
      </section>
    );
  }

  return (
    <>
      <ProductHero product={product} />

      <ProductDescription
        descriptions={product.productDescriptions}
      />

      <ProductGallery
        galleries={product.galleries}
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