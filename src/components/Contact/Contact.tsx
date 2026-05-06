import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { COMPANY, formatPhone, phoneHref, whatsappHref } from '../../data/company';
import { PROJECTS } from '../../data/projects';
import './Contact.scss';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'general',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const interestLabel =
      form.interest === 'general'
        ? t('contact.form.interestGeneral')
        : t(`projects.items.${form.interest}.name`);

    const message = [
      `${t('contact.form.name')}: ${form.name}`,
      `${t('contact.form.phone')}: ${form.phone}`,
      form.email ? `${t('contact.form.email')}: ${form.email}` : '',
      `${t('contact.form.interest')}: ${interestLabel}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappHref(COMPANY.whatsapp, message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact__grid">
          <motion.aside
            className="contact__info"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="contact__info-list">
              <li>
                <span className="contact__info-icon"><FiPhone /></span>
                <div>
                  <h4>{t('contact.info.phoneLabel')}</h4>
                  {COMPANY.phones.map((p) => (
                    <a key={p} href={phoneHref(p)} dir="ltr">
                      {formatPhone(p)}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <span className="contact__info-icon"><FaWhatsapp /></span>
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href={whatsappHref(COMPANY.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                  >
                    {formatPhone(COMPANY.whatsapp)}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__info-icon"><FiMail /></span>
                <div>
                  <h4>{t('contact.info.emailLabel')}</h4>
                  <a href={`mailto:${COMPANY.email}`} dir="ltr">{COMPANY.email}</a>
                </div>
              </li>
              <li>
                <span className="contact__info-icon"><FiMapPin /></span>
                <div>
                  <h4>{t('contact.info.addressLabel')}</h4>
                  <a
                    href={COMPANY.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.info.address')}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__info-icon"><FiClock /></span>
                <div>
                  <h4>{t('contact.info.hoursLabel')}</h4>
                  <p>{t('contact.info.hours')}</p>
                </div>
              </li>
            </ul>

            <div className="contact__socials">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={whatsappHref(COMPANY.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="contact__map">
              <iframe
                title={t('contact.info.addressLabel')}
                src={COMPANY.mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted && (
              <div className="contact__success" role="status">
                <FiCheckCircle aria-hidden="true" />
                <div>
                  <strong>{t('contact.form.success')}</strong>
                  <p>{t('contact.form.successHint')}</p>
                </div>
              </div>
            )}

            <div className="contact__field">
              <label htmlFor="cf-name">{t('contact.form.name')}</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="cf-phone">{t('contact.form.phone')}</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  dir="ltr"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email">{t('contact.form.email')}</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-interest">{t('contact.form.interest')}</label>
              <select
                id="cf-interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
              >
                <option value="general">{t('contact.form.interestGeneral')}</option>
                {PROJECTS.map((p) => (
                  <option key={p.id} value={p.i18nKey}>
                    {t(`projects.items.${p.i18nKey}.name`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message">{t('contact.form.message')}</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              {t('contact.form.submit')}
              <Arrow aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
