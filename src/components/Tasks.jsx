import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import Context from "./Context";

export default function Tasks({ tasks, filter, choices, dispatch }) {

  return (
    <div className="w-[100%] ">
      {tasks?.length > 0 &&
        tasks.map((data) => {
          if (
            (choices.includes(data.color) || choices.length == 0) &&
            (data.status == filter || filter == "all")
          ) {
            return <Task dispatch={dispatch} key={data.id} task={data} />;
          }
        })}
    </div>
  );
}
