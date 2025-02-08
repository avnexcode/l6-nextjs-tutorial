import { PageContainer } from "@/components/layouts/PageContainer";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { CreateTodoForm } from "../forms";
import { TodoTable } from "../tables";

export const TodoPage = () => {
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer
        padded
        withBackground
        className="min-h-screen gap-y-10 pt-10"
      >
        {/* Todo Form */}
        <CreateTodoForm />
        {/* Todo Table */}
        <TodoTable />
      </SectionContainer>
    </PageContainer>
  );
};
