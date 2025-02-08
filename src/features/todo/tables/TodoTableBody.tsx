"use client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TodoTableMenu } from "./TodoTableMenu";
import { renderElements } from "@/utils/render-elements";

export const TodoTableBody = () => {
  const todoList = [...new Array<undefined>(0)];
  return (
    <TableBody>
      {renderElements({
        of: todoList,
        keyExtractor: (_, index) => index,
        fallback: (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No Todo
            </TableCell>
          </TableRow>
        ),
        render: (_, index) => (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="w-full">Hello World</TableCell>
            <TableCell>True</TableCell>
            <TableCell>
              <TodoTableMenu todoId="1" />
            </TableCell>
          </TableRow>
        ),
      })}
    </TableBody>
  );
};
