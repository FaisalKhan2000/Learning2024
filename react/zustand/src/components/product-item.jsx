import { FaCartPlus } from "react-icons/fa";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductItem = ({
  product,
  existingProduct,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const productInCart = existingProduct(product.name);

  return (
    <div>
      <div className="relative hover:border-2 border-red rounded">
        <img
          src={`${product.image.mobile}`}
          alt={product.name}
          className="w-full h-full object-cover rounded"
        />

        {productInCart ? (
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
            onClick={() => addToCart(product)}
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
