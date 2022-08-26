import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

export const App = () => {
  const todosArray = useSelector((state) => state.todos);
  const filterForTodos = useSelector((state) => state.filter);

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
      <Header />
      <Main todos={todos} />
      <Footer amountTodo={amountTodo} todosArray={todosArray} />
    </div>
  );
};
