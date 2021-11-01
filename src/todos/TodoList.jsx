import React from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "./store";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
  const todoList = useRecoilValue(todosState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}
