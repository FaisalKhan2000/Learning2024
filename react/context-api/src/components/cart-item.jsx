import { MdOutlineCancel } from "react-icons/md";
import { useGlobalContext } from "../context/useGlobalContext";

const CartItem = ({ cart, removeProduct }) => {
  return (
    <div className="flex items-center justify-between pb-3 border-b">
      <div className="flex flex-col gap-2">
        <h2 className="text-rose900 font-medium">{cart.name}</h2>
        <div className="flex items-center gap-3">
          <p className="text-red font-medium">{cart.quantity}x</p>
          <p className="text-rose400">@{cart.price}</p>
          <p className="text-rose500">${cart.price * cart.quantity}</p>
        </div>
      </div>
      <MdOutlineCancel
        onClick={() => removeProduct(cart.name)}
        className="text-rose500 text-2xl cursor-pointer hover:text-rose900"
      />
    </div>
  );
};
export default CartItem;
