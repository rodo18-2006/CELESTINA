import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home({ agregarAlCarrito }) {
  // Productos destacados
  const destacados = [
    {
      id: 1,
      name: "Campera negra de cuero",
      price: 2500,
      image: "https://m.media-amazon.com/images/I/61o8rUzDEgL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "Botas elegantes de cuero",
      price: 5500,
      image:
        "https://img.freepik.com/fotos-premium/concepto-compras-calzado-elegante-cuero-femenino-par-zapatos-cuero-moda_474717-119758.jpg",
    },
    {
      id: 3,
      name: "Bolso de jean para viajes",
      price: 4000,
      image:
        "https://www.tatinbags.com/wp-content/uploads/2023/04/mini-bolso-cruzado-vaquero-con-bolsillo-detras-de-tatinbags-hecho-a-mano.jpg",
    },
  ];

  // Hero carousel
  const heroImages = [
    "https://www.patronesmil.es/wp-content/uploads/2024/10/2-bolsos-mezclilla.jpg",
    "https://mandalaaccesorios.com.ar/wp-content/uploads/2025/03/2_-PLATA-925-1240x698.jpg",
    "https://www.laprensa.com.ar/Multimedios/Imgs/98858_620.jpg?v=3",
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <img src={heroImages[currentHero]} alt="Hero" className="hero-img" />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>CELESTINA</h1>
          <p>Ropa, calzado y accesorios minimalistas para tu estilo</p>
          <Link to="/productos" className="btn-hero">
            Comprar ahora
          </Link>
        </div>
      </section>

      {/* Categorías */}
      <section className="home-categorias">
        <h2>Categorías</h2>
        <div className="categorias-grid">
          <Link to="/productos" className="categoria-item">
            <img
              src="https://media.ambito.com/p/aaf7481f624a5be504b589056a6b2ce7/adjuntos/239/imagenes/040/250/0040250587/moda-ropajpg.jpg"
              alt="Ropa"
            />
            <p>Ropa</p>
          </Link>
          <Link to="/accesorios" className="categoria-item">
            <img
              src="https://images.cdn-files-a.com/uploads/5141094/2000_61a02f373328b_filter_61a02f4bc8002.jpg"
              alt="Accesorios"
            />
            <p>Accesorios</p>
          </Link>
          <Link to="/productos" className="categoria-item">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_757062-MLC84806904216_052025-O-calzado-zapato-oficina-salir-vestir-mujer-blancos.webp"
              alt="Calzado"
            />
            <p>Calzado</p>
          </Link>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {destacados.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              addToCart={agregarAlCarrito}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
