import dimensions from '../data/partners/imageDimensions.json';
export const partnerImageSizes = '(max-width: 700px) 100vw, 960px';
export function partnerImageAttributes(src: string) {
 const size = (dimensions as Record<string, { width: number; height: number }>)[src];
 if (!size) return {};
 const widths = /\.(webp|png|jpe?g)$/.test(src) && !/logo/i.test(src) && size.width >= 600
  ? [400, 800, 1200].filter(width => width < size.width) : [];
 const relative = src.replace('/images/partners/', '').replace(/\.[^.]+$/, '');
 const srcset = widths.length ? [
  ...widths.map(width => `/images/partners/responsive/${relative}-${width}.webp ${width}w`),
  `${src} ${size.width}w`,
 ].join(', ') : undefined;
 return { ...size, srcset, sizes: srcset ? partnerImageSizes : undefined };
}
