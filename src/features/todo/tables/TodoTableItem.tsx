import { TableCell, TableRow } from "@/components/ui/table";
import type { Todo } from "../types";
import { TodoTableMenu } from "./TodoTableMenu";

type TodoTableItemProps = {
  index: number;
  todo: Todo;
};

export const TodoTableItem = ({ todo, ...props }: TodoTableItemProps) => {
  return (
    <TableRow>
      <TableCell>{props.index + 1}</TableCell>
      <TableCell className="w-full">{todo.text}</TableCell>
      <TableCell>True</TableCell>
      <TableCell>
        <TodoTableMenu todoId={todo.id} />
      </TableCell>
    </TableRow>
  );
};
export const TodoTableNotFoundItem = () => (
  <TableRow>
    <TableCell colSpan={4} className="text-center">
      No Todo
    </TableCell>
  </TableRow>
);
