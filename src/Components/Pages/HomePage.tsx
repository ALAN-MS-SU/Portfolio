import { Header, HR, SocialMedia, UserSection, ViewProjects } from "@/Components/Pieces";
export async function HomePage() {
  return (
    <>
      <Header />
      <UserSection />
      <HR />
      <ViewProjects />
      <HR />
      <SocialMedia />
    </>
  );
}
