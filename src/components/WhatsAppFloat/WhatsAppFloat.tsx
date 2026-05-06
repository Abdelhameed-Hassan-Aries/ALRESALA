import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { COMPANY, whatsappHref } from '../../data/company';
import './WhatsAppFloat.scss';

export default function WhatsAppFloat() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`whatsapp-float ${visible ? 'is-visible' : ''}`}
      href={whatsappHref(COMPANY.whatsapp, t('cta.title'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
