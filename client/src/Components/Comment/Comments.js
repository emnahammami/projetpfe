import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { FaComments } from "react-icons/fa";

import CommentList from "./CommentList";

const Comments = ({el}) => {
  const [showResults, setShowResults] =useState(false)
  const onClick = () => setShowResults(!showResults)


 
  return (
    <div>
      <Button variant="success" type="submit" value="comments" onClick={onClick} ><FaComments/></Button>
      { showResults ? <CommentList el={el}/> : null }
    </div>
  );
};

export default Comments;