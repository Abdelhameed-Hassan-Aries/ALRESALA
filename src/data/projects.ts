import alObour from '../assets/projects/al-obour-land.png';
import industrial from '../assets/projects/industrial-land.png';
import suaveResort from '../assets/projects/suave-resort.png';
import premium from '../assets/projects/premium-development.png';

export type ProjectStatus = 'available' | 'coming-soon';

export interface Project {
  id: string;
  i18nKey: 'alObour' | 'industrial' | 'suaveResort' | 'premium';
  image: string;
  status: ProjectStatus;
  accent: string;
  yearBadge?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'al-obour',
    i18nKey: 'alObour',
    image: alObour,
    status: 'available',
    accent: '#d97706',
    yearBadge: '2026',
  },
  {
    id: 'industrial',
    i18nKey: 'industrial',
    image: industrial,
    status: 'available',
    accent: '#475569',
    yearBadge: '2026',
  },
  {
    id: 'suave-resort',
    i18nKey: 'suaveResort',
    image: suaveResort,
    status: 'coming-soon',
    accent: '#c2410c',
    yearBadge: '2026',
  },
  {
    id: 'premium',
    i18nKey: 'premium',
    image: premium,
    status: 'coming-soon',
    accent: '#b45309',
    yearBadge: '2026',
  },
];
