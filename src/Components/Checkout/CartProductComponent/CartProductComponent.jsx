import { useContext } from "react";
import { AppContext } from "../../../AppContext.js";
import { StyledWrapper, StyledItem } from "./CartProductComponent.styles.js";
import Delete from "../../../Assets/Delete.jsx";
import Minus from "../../../Assets/Minus.jsx";
import Plus from "../../../Assets/Plus.jsx";
import {
  PlusOne,
  MinusOne,
  RemovefromCart,
} from "../../../ButtonControllers/ButtonControllers.js";

const CartProducts = () => {
  const { cart, setCart } = useContext(AppContext);

  const renderedProducts = cart.map((product) => {
    const offer = () => {
      if (product.name === "Coca-Cola" || product.name === "Croissants") {
        return true;
      }
      return false;
    };

    const isCocaCola = product.name === "Coca-Cola";
    const isCroissants = product.name === "Croissants";

    return (
      <StyledWrapper key={product.id}>
        {isCocaCola && (
          <div className="offerDiv">
            <div className="more">Offer</div>
            <p className="offerName">
              Buy 6 cans of Coca-Cola, and get one free
            </p>
          </div>
        )}
        {isCroissants && (
          <div className="offerDiv">
            <div className="more">Offer</div>
            <p className="offerName">Buy 3 croissants and get a free coffee</p>
          </div>
        )}

        <StyledItem offer={offer()}>
          <div className="img">
            <img src={product.img} alt="Product" />
          </div>

          <div className="labelTop">
            <h3>{product.name}</h3>
            <div className="p">{product.description}</div>
          </div>

          <div className="controllers">
            <div className="quantityBox">
              <div className="quantityControllers">
                <div
                  className="minus"
                  onClick={() => MinusOne(product, setCart)}
                >
                  <Minus />
                </div>
                <div className="count">{product.count}</div>
                <div className="plus" onClick={() => PlusOne(product, setCart)}>
                  <Plus />
                </div>
              </div>
              <div className="quantityAvailable">
                {product.available === product.count ? (
                  <div className="zero">Out of stock</div>
                ) : product.available - product.count <= 5 ? (
                  <div className="less">
                    Only {product.available - product.count} left
                  </div>
                ) : (
                  <div className="more">Available</div>
                )}
              </div>
            </div>
            <div className="priceAndControllers">
              <div className="price">{product.price}</div>
              <div
                className="delete"
                onClick={() => RemovefromCart(product, cart, setCart)}
              >
                <Delete />
              </div>
            </div>
          </div>
        </StyledItem>
      </StyledWrapper>
    );
  });

  return renderedProducts;
};

export default CartProducts;
