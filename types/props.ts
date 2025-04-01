type ComponentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface BaseSectionProps {
  background?: boolean;
  backgroundPosition?: "full" | "top" | "bottom";
}

export interface BaseProps extends BaseSectionProps {
  title: string;
  titleComponent?: ComponentType;
  tagline?: string;
  taglineComponent?: ComponentType;
}
