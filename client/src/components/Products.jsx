import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProdducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://vu-fashion-server.vercel.app/api/products/?category=${cat}`
            : "https://vu-fashion-server.vercel.app/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);
  console.log(products);

  useEffect(() => {
    cat &&
      setFilteredProdducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredProdducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
      case "asc":
        setFilteredProdducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;
      case "desc":
        setFilteredProdducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;

      default:
        break;
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((ele) => <Product key={ele.id} item={ele} />)
        : products
            .slice(0, 8)
            .map((ele) => <Product key={ele.id} item={ele} />)}
    </Container>
  );
};

export default Products;
