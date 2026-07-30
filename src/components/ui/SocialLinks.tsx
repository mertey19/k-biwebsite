import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

import { getSafeSocialUrl, type SocialPlatform } from "@/src/config/site";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const socialItems: Array<{
  icon: IconType;
  label: string;
  platform: SocialPlatform;
}> = [
  { icon: FaLinkedinIn, label: "LinkedIn", platform: "linkedin" },
  { icon: FaInstagram, label: "Instagram", platform: "instagram" },
];

export function SocialLinks({
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`} aria-label="Sosyal medya">
      {socialItems.map(({ icon: Icon, label, platform }) => {
        const href = getSafeSocialUrl(platform);
        const content = (
          <>
            <Icon
              aria-hidden="true"
              className={`social-icon social-icon--${platform}`}
            />
            {showLabels ? (
              <span>{label}</span>
            ) : (
              <span className="sr-only">{label}</span>
            )}
          </>
        );

        return href ? (
          <a
            className={`social-link social-link--${platform}`}
            href={href}
            key={platform}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="social-link social-link--disabled"
            key={platform}
            title={`${label} bağlantısı henüz eklenmedi`}
          >
            {content}
          </span>
        );
      })}
    </div>
  );
}
