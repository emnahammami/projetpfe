import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_articles } from '../../Redux/Action/articleAction';
import AccouplementCard from './AccouplementCard';

const AccouplementList = () => {
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
      {articles.map((el) => el.role=="accouplement" && (
        <div key={el._id}>
          <AccouplementCard el={el} />
        </div>
      ))}  
    </div>
  )
}

export default AccouplementList