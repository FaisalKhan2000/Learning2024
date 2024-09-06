import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductItem = ({ product }) => {
  const { data, cart, setCart } = useGlobalContext();

  // check if product already exists in the cart
  const existingProduct = cart.find((item) => item.name === product.name);

  const addToCart = (name) => {
    // check if product exists in the array
    const product = data.find((item) => item.name === name);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCart(updatedCart);
      console.log("quantity increased");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log("added to cart");
    }
  };

  const increaseQuantity = (name) => {
    const updatedCart = cart.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    console.log("quantity increased");
  };

  const decreaseQuantity = (name) => {
    const updatedCart = cart
      .map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

    setCart(updatedCart);
    console.log("quantity decreased or item removed");
  };

  return (
    <div>
      <div className="relative hover:border-2 border-red rounded">
        <img
          src={`${product.image.mobile}`}
          alt={product.name}
          className="w-full h-full object-cover rounded"
        />

        {existingProduct ? (
          <div className="w-50 h-10 bg-red text-rose50 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-around">
            <CiCircleMinus
              onClick={() => decreaseQuantity(product.name)}
              className="text-2xl cursor-pointer text-white"
            />
            <p>{existingProduct.quantity}</p>
            <CiCirclePlus
              onClick={() => increaseQuantity(product.name)}
              className="text-2xl cursor-pointer text-white"
            />
          </div>
        ) : (
          <button
            onClick={() => addToCart(product.name)}
            className="bg-white rounded-full w-50 h-10 text-rose900 font-medium absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-1 border-rose500 hover:border-red hover:text-red flex items-center justify-center gap-2 px-2"
          >
            <FaCartPlus className="text-red" /> Add to Cart
          </button>
        )}
      </div>
      <h4 className="text-rose400 mt-4">{product.category}</h4>
      <p className="font-semibold text-rose900">{product.name}</p>
      <h3 className="text-red font-medium">$ {product.price}</h3>
    </div>
  );
};
export default ProductItem;
