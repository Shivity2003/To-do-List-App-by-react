import React from "react";

const ToDoLists = (props) => {
   
     return(
        <>
        <div className="todo_style">
        <i className="glyphicon glyphicon-remove" aria-hidden="true" 
        onClick={()=>{
            props.onSelect(props.id);
        }}/>
   
      <li>{props.text}</li>
      </div>
      </>
      );
};
export default ToDoLists;