import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import search from "../assets/icons/search.png";

const ProductsList = () => {
  const products = [
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 1,
    },
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 2,
    },
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 3,
    },
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 4,
    },
    {
      name: "Building future-proof bridges with digitalisation",
      img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: 5,
    },
  ];
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="search_wrapper">
        <div className="search_icon">
          <input type="text" />
          <img src={search} alt="" />
        </div>
        <button className="search_button">Search</button>
      </div>
      <div className="products_wrapper">
        {products?.map(item => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

      <div className="pagination_list_wrapper"></div>
    </div>
  );
};

export default ProductsList;
