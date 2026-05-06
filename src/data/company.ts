export const COMPANY = {
  name: 'AlResalah Group',
  shortName: 'AlResalah',
  email: 'alresalah1group@gmail.com',
  phones: ['+201004445400', '+201003611438', '+201000399571'],
  whatsapp: '+201004445400',
  addressEn: '194 Gesr El-Suez St., Al-Hassan Towers 1, 2nd Floor, Cairo, Egypt',
  addressAr: '194 شارع جسر السويس، أبراج الحسن 1، الدور الثاني، القاهرة، مصر',
  facebook: 'https://www.facebook.com/Alresalah.Group',
  instagram: 'https://www.instagram.com/alresalah1group',
  mapEmbed:
    'https://www.google.com/maps?q=194+Gesr+El-Suez+St,+Cairo,+Egypt&output=embed',
  mapLink:
    'https://www.google.com/maps?q=194+Gesr+El-Suez+St,+Cairo,+Egypt',
  founded: 2008,
} as const;

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 12 && cleaned.startsWith('20')) {
    const local = '0' + cleaned.slice(2);
    return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`;
  }
  return phone;
};

export const phoneHref = (phone: string): string =>
  `tel:${phone.replace(/\s/g, '')}`;

export const whatsappHref = (phone: string, message?: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleaned}${text}`;
};
