import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_articles } from "../../Redux/Action/articleAction";

import ArticleCard from "./ArticleCard";
const Articlelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_articles());
  }, []);
  const { articles } = useSelector((state) => state.articleReducer);
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {articles.map((el) => el.role =="article" && (
        <div key={el._id}>
          <ArticleCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Articlelist;
