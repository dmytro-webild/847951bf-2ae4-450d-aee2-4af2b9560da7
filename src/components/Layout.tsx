import { Outlet } from 'react-router-dom';

import FooterSimple from '@/components/sections/footer/FooterSimple';
import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarDropdown from "@/components/ui/NavbarDropdown";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarDropdown
                logo="Flashly"
                navItems={[
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Integrations", href: "#integrations" },
                  { name: "FAQ", href: "#faq" },
                ]}
                ctaButton={{ text: "Start Free Trial", href: "#" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimple
                brand="Flashly"
                columns={[
                  {
                    title: "Product",
                    items: [
                      { label: "Features", href: "#features" },
                      { label: "Pricing", href: "#pricing" },
                      { label: "Integrations", href: "#integrations" },
                      { label: "Changelog", href: "#" },
                    ],
                  },
                  {
                    title: "Resources",
                    items: [
                      { label: "Blog", href: "#blog" },
                      { label: "Documentation", href: "#" },
                      { label: "API Reference", href: "#" },
                      { label: "Help Center", href: "#" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About", href: "#" },
                      { label: "Careers", href: "#" },
                      { label: "Contact", href: "#contact" },
                    ],
                  },
                ]}
                copyright="© 2026 Flashly. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
