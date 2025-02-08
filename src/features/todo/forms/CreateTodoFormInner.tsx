"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type CreateTodoFormInnerProps = {
  formId: string;
  onSubmit: (values: string) => void;
};

export const CreateTodoFormInner = ({
  formId,
  onSubmit,
}: CreateTodoFormInnerProps) => {
  const form = useFormContext();
  return (
    <form id={formId}>
      <FormField
        control={form.control}
        name="text"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Todo</FormLabel>
            <FormControl>
              <Input placeholder="Input your todo here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};
