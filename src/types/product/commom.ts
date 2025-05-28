export interface Links {
  self: Self[];
  collection?: Collection[];
  up?: Collection[];
}

export interface Collection {
  href: string;
}

interface Self {
  href: string;
  targetHints: TargetHints;
}

interface TargetHints {
  allow: string[];
}
