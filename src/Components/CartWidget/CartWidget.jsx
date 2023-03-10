import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";


import "../Styles/CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <Link to={"/Cart"}>
        <span className="contador">0</span>
        <GiShoppingCart className="Widget" size={25} color="black" />
      </Link>
    </>
  );
};

export default CartWidget;
