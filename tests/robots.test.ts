import { describe, it, expect } from 'vitest';
import { robotsTxt } from '../src/lib/robots';
import { site } from '../src/data/site';

describe('robotsTxt', () => {
  it('autorise le crawl de tout le site', () => {
    expect(robotsTxt()).toContain('User-agent: *');
    expect(robotsTxt()).toContain('Allow: /');
  });

  it('référence le sitemap sur le domaine courant, pas un domaine en dur', () => {
    expect(robotsTxt()).toContain(`Sitemap: ${site.url}/sitemap-index.xml`);
  });

  it('se termine par un saut de ligne', () => {
    expect(robotsTxt().endsWith('\n')).toBe(true);
  });
});
