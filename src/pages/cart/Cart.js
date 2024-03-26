import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Grid } from "react-loader-spinner";
import {
  getItemsByUserIdAsync,
  updateQuantityByIdAsync,
  deleteItemByIdAsync,
} from "../../redux/cart/cart.async";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Modal from "../../components/common/Modal";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

const Cart = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(null);
  const { getItemsByUser, cartLoader } = useSelector((state) => state.cart);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [quantity, setQuantity] = useState(1);

  const [totalSum, setTotalSum] = useState(0);

  const handleQuantity = (e, id) => {
    setQuantity(e.target.value);
    const payload = {
      id: id,
      quantity: e.target.value,
    };
    dispatch(updateQuantityByIdAsync(payload));
  };

  useEffect(() => {
    const payload = {
      id: currentUser?.id,
    };
    dispatch(getItemsByUserIdAsync(payload));
  }, [currentUser?.id, quantity]);

  useEffect(() => {
    const sum = getItemsByUser.reduce(
      (accumulator, product) =>
        accumulator + product.sellingPrice * product.quantity,
      0
    );
    setTotalSum(sum);
  }, [getItemsByUser]);

  const removeItem = (e, prodId) => {
    const payload = {
      id: prodId,
    };
    dispatch(deleteItemByIdAsync(payload)).then((res) => {
      if (res.payload) {
        const payload = {
          id: currentUser?.id,
        };
        dispatch(getItemsByUserIdAsync(payload));
      }
    });
  };

  return (
    <>
      {!getItemsByUser.length && <Navigate to="/" replace={true}></Navigate>}
      <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            Cart
          </h1>
          <div className="flow-root">
            {cartLoader == true ? (
              <Grid
                height="80"
                width="80"
                color="rgb(79, 70, 229)"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : null}

            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {getItemsByUser?.map((product) => (
                <li key={product?.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product?.images[0]}
                      alt={product?.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{product?.title}</a>
                        </h3>
                        <p className="ml-4">
                          ₹ {product?.sellingPrice * product?.quantity}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product?.color && product?.color?.name}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <select
                          onChange={(e) => handleQuantity(e, product?.id)}
                          value={product?.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <div className="flex">
                        <Modal
                          title={`Delete ${product?.title}`}
                          message="Are you sure you want to delete this Cart item?"
                          dangerOption="Delete"
                          cancelOption="Cancel"
                          dangerAction={(e) => removeItem(e, product?.id)}
                          cancelAction={() => setOpenModal(null)}
                          showModal={openModal === product?.id}
                        ></Modal>

                        <button
                          type="button"
                          onClick={(e) => setOpenModal(product?.id)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>₹ {totalSum}</p>
          </div>
          <div className="flex justify-between my-2 text-base font-medium text-gray-900">
            <p>Total Items in Cart</p>
            <p>{getItemsByUser?.length} items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to={currentUser?.role == "admin" ? "/admin" : "/"}>
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
