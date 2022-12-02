import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { listProducts } from "../actions/productsActions";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const { keyword } = useParams();
  const keywords = keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keywords));
  }, [dispatch, keywords]);
  return (
    <>
      <h1>latest producs</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row sm={12} md={6} lg={4} xl={3}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
