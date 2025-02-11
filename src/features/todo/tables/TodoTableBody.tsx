"use client";
import { TableBody } from "@/components/ui/table";
import { renderElements } from "@/utils/render-elements";
import { useTodos } from "../api";
import { TodoTableBodySkeleton } from "../components/skeleton/TodoTableBodySkeleton";
import { TodoTableItem, TodoTableNotFoundItem } from "./TodoTableItem";

export const TodoTableBody = () => {
  const { data: todoList, isLoading: isTodoLoading } = useTodos();
  if (isTodoLoading) {
    return <TodoTableBodySkeleton />;
  }
  return (
    <TableBody>
      {renderElements({
        of: todoList?.data,
        keyExtractor: (todo) => todo.id,
        fallback: <TodoTableNotFoundItem />,
        render: (todo, index) => <TodoTableItem index={index} todo={todo} />,
      })}
    </TableBody>
  );
};
