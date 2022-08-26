import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

export const App = () => {
  const todosArray = useSelector((state) => state);
  const dispatch = useDispatch();

  const [filterForTodos, setFilteredTodos] = useState("All");

  const todos = useMemo(() => {
    return todosArray.filter((item) => {
      if (filterForTodos === "All") return todosArray;
      if (filterForTodos === "Active") {
        return !item.isCompleted;
      }
      return item.isCompleted;
    });
  }, [todosArray, filterForTodos]);

  const amountTodo = todosArray.filter((item) => !item.isCompleted).length;

  return (
    <div className={styles.root}>
      <Header amountTodo={amountTodo} dispatch={dispatch} />
      <Main todos={todos} dispatch={dispatch} />
      <Footer
        amountTodo={amountTodo}
        todosArray={todosArray}
        filterForTodos={filterForTodos}
        setFilteredTodos={setFilteredTodos}
        dispatch={dispatch}
      />
    </div>
  );
};
