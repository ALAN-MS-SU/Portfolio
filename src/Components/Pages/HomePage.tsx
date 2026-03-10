import {Header, HR, SocialMedia, Stack, UserSection, ViewProjects} from "@/Components/Pieces";
export async function HomePage() {
  return (
    <>
      <Header />
      <UserSection />
        <HR/>
        <Stack />
        <HR />
      <ViewProjects />
      <HR />
      <SocialMedia />
    </>
  );
}
