import { useContext } from "react";
import { AppContext } from "../../../AppContext.js";
import { StyledWrapper, StyledItem } from "./ProductComponent.styles.js";
import FullHeart from "../../../Assets/FullheartSVG.jsx";
import EmptyHeart from "../../../Assets/EmptyheartSVG.jsx";
import FullCart from "../../../Assets/FullcartSVG.jsx";
import EmptyCart from "../../../Assets/EmptycartSVG.jsx";
import Minus from "../../../Assets/Minus.jsx";
import Plus from "../../../Assets/Plus.jsx";
import {
  PlusOne,
  MinusOne,
  ToggleInArray,
} from "../../../ButtonControllers/ButtonControllers.js";

const Products = (dataToMap) => {
  const { cart, setCart, wishlist, setWishlist } = useContext(AppContext);

  const Hearts = (product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    return isWishlisted ? (
      <FullHeart className="heart" />
    ) : (
      <EmptyHeart className="heart" />
    );
  };

  const Carts = (product) => {
    const isCarted = cart.some((item) => item.id === product.id);
    return isCarted ? (
      <FullCart className="cart" />
    ) : (
      <EmptyCart className="cart" />
    );
  };

  const renderedProducts = dataToMap.map((product) => {
    const item = cart.find((item) => item.id === product.id);
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

          <div className="label">
            <div className="labelTop">
              <h3>{product.name}</h3>
              <div className="p">{product.description}</div>
            </div>

            <div className="labelBottom">
              <div className="quantity">
                {item ? (
                  item.available === item.count ? (
                    <div className="zero">Out of stock</div>
                  ) : item.available - item.count <= 5 ? (
                    <div className="less">
                      Only {item.available - item.count} left
                    </div>
                  ) : (
                    <div className="more">Available</div>
                  )
                ) : product.available <= 5 ? (
                  <div className="less">Only {product.available} left</div>
                ) : (
                  <div className="more">Available</div>
                )}

                {item ? (
                  <div className="inCart">
                    <div
                      className="minus"
                      onClick={() => MinusOne(product, setCart)}
                    >
                      <Minus />
                    </div>
                    <div className="inCartCount">{item.count}</div>
                    <div
                      className="plus"
                      onClick={() => PlusOne(product, setCart)}
                    >
                      <Plus />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="priceAndControllers">
                <div className="quantityControllers">
                  <div className="count">{product.count}</div>
                </div>

                <div className="price">{product.price}</div>
                <div className="controllers">
                  <div onClick={() => ToggleInArray(product, cart, setCart)}>
                    {Carts(product)}
                  </div>
                  <div
                    onClick={() =>
                      ToggleInArray(product, wishlist, setWishlist)
                    }
                  >
                    {Hearts(product)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledItem>
      </StyledWrapper>
    );
  });
  return renderedProducts;
};

export default Products;
