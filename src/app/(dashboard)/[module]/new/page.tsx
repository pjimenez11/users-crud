"use client";

import { ContentLayout } from "@/core/layout/content/content-layout";
import NewUserView from "@/features/users/presentation/views/new-user-view";
import { useParams } from "next/navigation";

export default function NewPage() {
  const { module } = useParams() as { module: string };
  const Views: Record<string, React.ComponentType> = {
    users: NewUserView,
  };

  const SelectedView = Views[module];

  if (!SelectedView) {
    return <ContentLayout title="404">Module not found</ContentLayout>;
  }

  return <SelectedView />;
}
