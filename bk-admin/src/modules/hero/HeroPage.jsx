import { useEffect, useState } from "react";

import HeroForm from "./HeroForm";
import HeroService from "./hero.service";

export default function HeroPage() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHero = async () => {
    try {
      const data = await HeroService.getHero();
      setHero(data[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!hero) return <div>Hero belum tersedia.</div>;

  return (
    <HeroForm
      hero={hero}
      onSuccess={fetchHero}
    />
  );
}