import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { PiTree } from "react-icons/pi";
import { useGlobalContext } from "../context/useGlobalContext";
import ProductItem from "../components/product-item";
import CartItem from "../components/cart-item";

const Home = () => {
  const { data, cart, setCart } = useGlobalContext();
  const [showCart, setShowCart] = useState(false); // state to control the overlay and cart visibility

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeProduct = (name) => {
    const deletedProduct = cart.filter((item) => item.name !== name);
    setCart(deletedProduct);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-left font-extrabold text-3xl mb-2">Desserts</h2>

          {/* Cart icon to toggle the cart visibility */}
          <FaCartPlus
            className="text-red text-4xl cursor-pointer"
            onClick={() => setShowCart(true)}
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </div>

      {/* Overlay and Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowCart(false)} // Close the cart when the overlay is clicked
          ></div>

          {/* Cart Sidebar */}
          <div className="relative bg-white w-80 p-4 h-full transition-transform transform translate-x-0 flex flex-col gap-4">
            <h4 className="text-red font-medium text-xl text-left">
              Your Cart ({cart.length})
            </h4>

            {cart && cart.length ? (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <CartItem
                    key={item.name}
                    cart={item}
                    removeProduct={removeProduct}
                  />
                ))}

                {/* Order total */}
                <div className="flex items-center justify-between">
                  <p className="text-rose400 text-sm font-medium">
                    Order Total
                  </p>
                  <h2 className="text-rose900 text-2xl font-bold">
                    $ {totalPrice.toFixed(2)}
                  </h2>
                </div>

                <div className="bg-rose100 rounded px-3 py-2 flex items-center justify-center">
                  <PiTree className="text-xl text-green block me-2" />
                  <p className="text-rose500 text-sm">
                    This is a
                    <span className="text-rose900 font-medium">
                      {" "}
                      carbon-neutral{" "}
                    </span>
                    delivery
                  </p>
                </div>

                <button className="bg-red text-rose50 rounded-full py-2 hover:opacity-90">
                  Confirm Order
                </button>
              </div>
            ) : (
              <>
                <FaCartPlus className="mx-auto text-7xl -rotate-12 text-red" />
                <p className="text-rose500 text-sm text-center">
                  Your added items will appear here
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
