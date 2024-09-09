import { ContentLayout } from "@/core/layout/content/content-layout";
import TableList from "../components/table-list";

const UsersView = () => {
  return (
    <ContentLayout title="Usuarios">
      <TableList />
    </ContentLayout>
  );
};

export default UsersView;
