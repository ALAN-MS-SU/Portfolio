import { ProjectView } from "@/Components/Pages";
export default async function Home({
  params,
}: {
  params: Promise<{ ID: number }>;
}) {
  const { ID } = await params;
  return <ProjectView ID={ID} />;
}
