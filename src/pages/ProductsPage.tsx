import React, { useContext } from "react";
import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Product from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

const ProductsPage = () => {
  const { loading, products, error, addProduct } = useProducts();
  const { open, modal, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal onClose={close} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        onClick={open}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
