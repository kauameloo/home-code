import React from "react";
import "./Card.css";
import Container from "../Container/Container";
import testImage from "../../assets/images/testImage.jpg";
import couponIcon from "../../assets/images/couponIcon.svg";

const Card = ({ product }) => {
  const productImage = testImage;

  const { postTime, productName, coupon, oldPrice, newPrice, storeName } =
    product;

  const copyCouponHandler = () => {
    navigator.clipboard.writeText(coupon);
    alert("Cupom copiado com sucesso!");
  };

  const openLink = () => {
    window.open(
      "https://www.magazineluiza.com.br/apple-iphone-14-128gb-meia-noite-61-12mp-ios-5g/p/237184000/te/ip14/?&seller_id=magazineluiza&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=68708&gad_source=1&gclid=CjwKCAiAloavBhBOEiwAbtAJO851iOBgaCRlZPBwo07wg_w1DXfFiCbH1tKFOh6syJUKhd-uHW35uRoCD3UQAvD_BwE&gclsrc=aw.ds"
    );
  };

  return (
    <div className="card-class">
      <Container>
        <div className="card-flex">
          <div className="image-box">
            <p id="oferta-text">Oferta da: {storeName}</p>
            <img src={productImage} alt="" width={100} />
          </div>

          <div className="card-content-box">
            <div className="subcontent-box">
              <p>{postTime}</p>

              <p id="product-name">{productName}</p>

              <div className="box-price-coupon">
                <div className="product-price">
                  <p id="old-price">{oldPrice}</p>

                  <p id="new-price">{newPrice}</p>
                </div>

                <div className="coupon-and-icon">
                  <button onClick={copyCouponHandler}>
                    <img src={couponIcon} alt="" width={12} />
                  </button>

                  <p id="discount-coupon">{coupon}</p>
                </div>
              </div>
            </div>

            <button id="see-discount" onClick={openLink}>
              Ver oferta
            </button>
            <p id="warning">
              *Preço e disponibilidade sujeito a alteração a qualquer momento.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
