"use client";

import { ContentLayout } from "@/core/layout/content/content-layout";
import EditUserView from "@/features/users/presentation/views/edit-user-view";
import { useParams } from "next/navigation";
import { FC } from "react";

interface EditViewProps {
  id: string;
}

export default function EditPage() {
  const { module, id } = useParams() as { module: string; id: string };

  const Views: Record<string, FC<EditViewProps>> = {
    users: EditUserView,
  };

  const SelectedView = Views[module];
  if (!SelectedView) {
    return <ContentLayout title="404">Module not found</ContentLayout>;
  }

  return <SelectedView id={id} />;
}
