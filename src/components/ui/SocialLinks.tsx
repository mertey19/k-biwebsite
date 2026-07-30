import { getSafeSocialUrl, type SocialPlatform } from "@/src/config/site";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const socialItems: Array<{
  label: string;
  platform: SocialPlatform;
}> = [
  { label: "LinkedIn", platform: "linkedin" },
  { label: "Instagram", platform: "instagram" },
];

export function SocialLinks({
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`} aria-label="Sosyal medya">
      {socialItems.map(({ label, platform }) => {
        const href = getSafeSocialUrl(platform);
        const content = (
          <>
            <span
              aria-hidden="true"
              className={`social-glyph social-glyph--${platform}`}
            >
              {platform === "linkedin" ? "in" : <i />}
            </span>
            {showLabels ? (
              <span>{label}</span>
            ) : (
              <span className="sr-only">{label}</span>
            )}
          </>
        );

        return href ? (
          <a
            className="social-link"
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
