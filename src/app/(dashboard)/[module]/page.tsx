"use client";
import { ContentLayout } from "@/core/layout/content/content-layout";
import UsersView from "@/features/users/presentation/views/users-view";
import { useParams } from "next/navigation";
import { FC } from "react";

const Page: FC = () => {
  const { module } = useParams() as { module: string };

  const Views: Record<string, React.ComponentType> = {
    users: UsersView,
  };

  const SelectedView = Views[module];

  if (!SelectedView) {
    return <ContentLayout title="404">Module not found</ContentLayout>;
  }

  return (
    <>
      <SelectedView />
    </>
  );
};

export default Page;
