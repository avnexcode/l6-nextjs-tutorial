"use client";
import { Form } from "@/components/ui/form";
import { CreateTodoFormLayout } from "../components/layout";
import { CreateTodoFormInner } from "./CreateTodoFormInner";
import { useForm } from "react-hook-form";

export const CreateTodoForm = () => {
  const form = useForm();
  const onSubmit = (values: string) => {
    console.log(values);
  };
  return (
    <CreateTodoFormLayout formId="create-todo-form" isPending={false}>
      <Form {...form}>
        <CreateTodoFormInner formId="create-todo-form" onSubmit={onSubmit} />
      </Form>
    </CreateTodoFormLayout>
  );
};
