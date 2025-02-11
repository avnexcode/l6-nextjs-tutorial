"use client";
import { Form } from "@/components/ui/form";
import { CreateTodoFormLayout } from "../components/layout";
import { CreateTodoFormInner } from "./CreateTodoFormInner";
import { useForm } from "react-hook-form";
import type { CreateTodoFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoFormSchema } from "../schemas";
import { useCreateTodo, useTodos } from "../api";
import { toast } from "sonner";
export const CreateTodoForm = () => {
  const form = useForm<CreateTodoFormSchema>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(createTodoFormSchema),
  });

  const { refetch: refetchTodos } = useTodos();

  const { mutate: createTodo, isPending: isCreateTodoPending } = useCreateTodo({
    onSuccess: () => {
      form.reset();
      void refetchTodos();
      toast.success("Created todo successfully");
    },
  });

  const onSubmit = (values: CreateTodoFormSchema) => createTodo(values);

  return (
    <CreateTodoFormLayout
      formId="create-todo-form"
      isPending={isCreateTodoPending}
    >
      <Form {...form}>
        <CreateTodoFormInner formId="create-todo-form" onSubmit={onSubmit} />
      </Form>
    </CreateTodoFormLayout>
  );
};
