import { SocialLinks } from "@/src/components/ui/SocialLinks";
import { siteConfig } from "@/src/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <a className="footer-brand" href="#ana-sayfa">
            <span aria-hidden="true">KK</span>
            {siteConfig.name}
          </a>
          <p>Next.js ile özenle geliştirildi.</p>
        </div>
        <div className="footer-meta">
          <SocialLinks />
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
