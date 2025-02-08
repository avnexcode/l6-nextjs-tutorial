import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TodoTableMenu } from "./TodoTableMenu";

export const TodoTableBody = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell className="w-full">Hello World</TableCell>
        <TableCell>True</TableCell>
        <TableCell>
          <TodoTableMenu todoId="1" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell className="w-full">Hello World</TableCell>
        <TableCell>True</TableCell>
        <TableCell>
          <TodoTableMenu todoId="1" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell className="w-full">Hello World</TableCell>
        <TableCell>True</TableCell>
        <TableCell>
          <TodoTableMenu todoId="1" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
