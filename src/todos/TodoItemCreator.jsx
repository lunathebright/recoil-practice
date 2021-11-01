import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "./store";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todosState);

  const addItem = () => {
    setTodoList((oldList) => [
      ...oldList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  const onChange = (target) => {
    setInputValue(target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
