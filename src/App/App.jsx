import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { getFilteredTodos } from "../store/selectors/selectors";

export const App = () => {
  const filteredTodosArray = useSelector(getFilteredTodos);

  const amountTodo = filteredTodosArray.filter(
    (item) => !item.isCompleted
  ).length;

  return (
    <div className={styles.root}>
      <Header />
      <Main todos={filteredTodosArray} />
      <Footer amountTodo={amountTodo} />
    </div>
  );
};
