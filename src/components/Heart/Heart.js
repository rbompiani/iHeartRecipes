import React from "react";
import "./Heart.css"

const Heart = (props) => (
  <svg className={`heart ${props.isFav?'fav':null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => props.click(props.item)}>
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"></path>        
  </svg>    
) ;

export default Heart;