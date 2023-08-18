import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Language = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-center gap-x-1 lg:gap-x-4">
      <button
        className="hover:text-textAccent text-textLink transition font-medium"
        type="button"
        onClick={() => handleLanguageChange('ua')}
      >
        {t('language.ua')}
      </button>
      <button
        className="hover:text-textAccent text-textLink transition font-medium"
        type="button"
        onClick={() => handleLanguageChange('en')}
      >
        {t('language.en')}
      </button>
    </div>
  );
};

export default Language;
