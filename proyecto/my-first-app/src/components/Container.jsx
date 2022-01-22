import React, { useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div className="Caja1">
      <div >
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList} />
      </div>
    </div>
  );
};

export default Container;
