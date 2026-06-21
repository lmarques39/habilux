import PageLayout from "@/components/templates/PageLayout";
import CookieBanner from "@/components/organisms/CookieBanner";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      {children}
      <CookieBanner />
    </PageLayout>
  );
}
