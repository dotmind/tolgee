import { useRouter } from 'next/router';

const LanguageSelect: React.FC = () => {
  const router = useRouter();

  const setLanguage = (lang: string) => {
    router.replace(router.pathname, undefined, { locale: lang });
  };

  return (
    <select
      onChange={(e) => setLanguage(e.target.value)}
      value={router.locale}
    >
      <option value='en'>🇬🇧 English</option>
      <option value='fr'>🇫🇷 Français</option>
    </select>
  );
};

export default LanguageSelect;
