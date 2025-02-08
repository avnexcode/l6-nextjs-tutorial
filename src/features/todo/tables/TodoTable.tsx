import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoTableBody } from "./TodoTableBody";
import { TodoPagination } from "../components/TodoPagination";

export const TodoTable = () => {
  return (
    <Table className="border border-border bg-background">
      <TableCaption className="border border-border">
        <TodoPagination />
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Todo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TodoTableBody />
    </Table>
  );
};
