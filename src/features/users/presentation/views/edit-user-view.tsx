import { ContentLayout } from "@/core/layout/content/content-layout";

interface EditUserViewProps {
  id: string;
}

const EditUserView = ({ id }: EditUserViewProps) => {
  return (
    <ContentLayout title="Editar usuario">
      <div>Editar usuario {id}</div>
    </ContentLayout>
  );
};

export default EditUserView;
