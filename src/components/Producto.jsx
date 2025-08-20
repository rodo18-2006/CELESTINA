import React from "react";
import ProductCard from "./ProductCard";

export default function Productos({ agregarAlCarrito }) {
 const productos = [
   {
     id: 1,
     name: "Remera Negra",
     price: 2500,
     image:
       "https://www.sinergiaindustrial.com.ar/images/0ACA4A1023B54C30A73DBEA29EA94CE7.jpg",
     description: "Algodón premium",
     category: "Remeras",
   },
   {
     id: 2,
     name: "Pantalón Blanco",
     price: 4500,
     image:
       "https://images.jackjones.com/12139912/4484929/001/jackjones-jpstpaulflakecargonoos-blanca.png?v=2e06cbb6890270a99526eef5649d7c36&format=webp&width=1280&quality=90&key=25-0-3",
     description: "Slim fit elegante",
     category: "Pantalones",
   },
   {
     id: 3,
     name: "Campera Oversize",
     price: 7000,
     image:
       "https://d22fxaf9t8d39k.cloudfront.net/96d0a1ebe5ea1bfc75f51c5fa471538779125e6b5235d84faed0a9609c7959bd32864.jpeg",
     description: "Comodidad y estilo",
     category: "Camperas",
   },
   {
     id: 4,
     name: "Buzo Gris",
     price: 3800,
     image:
       "https://cdn.quiksilver.com.ar/media/catalog/product/cache/ac316686c40ec26114bfd36dff5801a0/2/2/2241108024-17_1.jpg",
     description: "Cómodo y moderno",
     category: "Buzos",
   },
   {
     id: 5,
     name: "Falda Larga",
     price: 4200,
     image:
       "https://media.vogue.mx/photos/666a65d78c2cfee01be3f95e/master/w_1600%2Cc_limit/1.png",
     description: "Estilo elegante",
     category: "Faldas",
   },
   {
     id: 6,
     name: "Camisa Azul",
     price: 3200,
     image:
       "https://i5.walmartimages.com/asr/edcf72d0-1207-45a2-9a5b-25e6cdce977c.4ce1c7fc2c14876cdc2ec72074f4ec56.jpeg",
     description: "Perfecta para oficina",
     category: "Camisas",
   },
   {
     id: 7,
     name: "Short Verano",
     price: 2700,
     image:
       "https://http2.mlstatic.com/D_NQ_NP_939246-MLA73885529018_012024-O.webp",
     description: "Ligero y fresco",
     category: "Shorts",
   },
   {
     id: 8,
     name: "Chaqueta Cuero",
     price: 8500,
     image:
       "https://dorianargentina.com/wp-content/uploads/2023/05/Arizona-Negro-Frente.jpg",
     description: "Estilo único",
     category: "Chaquetas",
   },
   {
     id: 9,
     name: "Vestido Rojo",
     price: 6200,
     image:
       "https://images.fashiola.es/product-list/300x450/yoox/668989218/vestidos-vestidos-largos.webp",
     description: "Ideal para eventos",
     category: "Vestidos",
   },
   {
     id: 10,
     name: "Remera Blanca Estampada",
     price: 2800,
     image:
       "https://monarqui.com.ar/wp-content/uploads/remera-blanca-snoopy-A023.jpg",
     description: "Algodón suave con estampado",
     category: "Remeras",
   },
   {
     id: 11,
     name: "Pantalón Negro Formal",
     price: 5000,
     image: "https://vertiche.mx/wp-content/uploads/2025/04/200802-NEGRO-1.jpg",
     description: "Para ocasiones especiales",
     category: "Pantalones",
   },
   {
     id: 12,
     name: "Campera Jean",
     price: 7200,
     image:
       "https://coppelar.vtexassets.com/arquivos/ids/1931973/R-321749-1.png?v=638400268457930000",
     description: "Clásico y resistente",
     category: "Camperas",
   },
   {
     id: 13,
     name: "Buzo Rosa",
     price: 3600,
     image:
       "https://triaxgo.com.ar/cdn/shop/files/1840694-800-auto-Photoroom.png?v=1734009538",
     description: "Cómodo y moderno",
     category: "Buzos",
   },
   {
     id: 14,
     name: "Falda Corta",
     price: 4000,
     image: "https://m.media-amazon.com/images/I/715aIMsR5zL._AC_UY1000_.jpg",
     description: "Estilo casual y fresco",
     category: "Faldas",
   },
   {
     id: 15,
     name: "Camisa Blanca",
     price: 3300,
     image:
       "https://www.verdementa.es/media/products/c/a/camisa-mujer-100-algodon-white-m.png",
     description: "Básica y versátil",
     category: "Camisas",
   },
   {
     id: 16,
     name: "Short Deportivo",
     price: 2500,
     image:
       "https://dcdn-us.mitiendanube.com/stores/001/130/526/products/short-futbol-femenino1-d1a0128ffe3c7dded216010366986490-640-0.jpg",
     description: "Ideal para entrenar",
     category: "Shorts",
   },
   {
     id: 17,
     name: "Chaqueta de Lana",
     price: 8000,
     image:
       "https://img.vitkac.com/uploads/product_thumb/KURTKA%20AA9V0418W012A%200-840/up/1.png",
     description: "Abrigo cálido",
     category: "Chaquetas",
   },
   {
     id: 18,
     name: "Vestido Azul",
     price: 6000,
     image:
       "https://www.rinascimento.com/media/catalog/product/c/f/c/0/CFC0122687003B056_det_4_03190224.jpg",
     description: "Elegante y cómodo",
     category: "Vestidos",
   },
   {
     id: 19,
     name: "Remera Manga Larga",
     price: 2700,
     image:
       "https://www.distritomoda.com.ar/sites/default/files/styles/product_medium/public/imagenes/2585_1738939762.png?itok=ChNrsSzb",
     description: "Perfecta para otoño",
     category: "Remeras",
   },
   {
     id: 20,
     name: "Pantalón Jeans",
     price: 4800,
     image:
       "https://acdn-us.mitiendanube.com/stores/004/476/272/products/pant-jean-oxford-azul-3ff75c250cd5d31e0317483465762216-1024-1024.png",
     description: "Clásico y resistente",
     category: "Pantalones",
   },
 ];


 return (
   <section className="productos">
     {productos.map((p) => (
       <ProductCard key={p.id} product={p} addToCart={agregarAlCarrito} />
     ))}
   </section>
 );

}
