import React from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./Home.css";
import Container from "../../components/Container/Container";
import products from "./products";

function Home() {
  // CARD MOCADOS

  const dataProducts = [
    {
      id: 1,
      postTime: "há 20 min",
      productName: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G",
      coupon: "CUPOM10",
      oldPrice: "R$ 5500,00",
      newPrice: "R$ 4000,00",
      storeName: "Magalu",
    },
    {
      id: 2,
      postTime: "há 20 min",
      productName: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G",
      coupon: "CUPOM10",
      oldPrice: "R$ 5500,00",
      newPrice: "R$ 4000,00",
      storeName: "Magalu",
    },
    {
      id: 3,
      postTime: "há 20 min",
      productName: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G",
      coupon: "CUPOM10",
      oldPrice: "R$ 5500,00",
      newPrice: "R$ 4000,00",
      storeName: "Magalu",
    },
    {
      id: 4,
      postTime: "há 20 min",
      productName: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G",
      coupon: "CUPOM10",
      oldPrice: "R$ 5500,00",
      newPrice: "R$ 4000,00",
      storeName: "Magalu",
    },
    {
      id: 5,
      postTime: "há 20 min",
      productName: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G ",
      coupon: "CUPOM10",
      oldPrice: "R$ 5500,00",
      newPrice: "R$ 4000,00",
      storeName: "Magalu",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <MainContent>
          <div className="maincontent-flex">
            <h1>Ultimas promoções</h1>
            <div className="cards-box">
              {dataProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </MainContent>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
