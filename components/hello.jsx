import { useTranslation } from 'next-i18next';

const Hello =  () => {
	const { t } = useTranslation('common')
	return (
	<main>
		<h1>Welcome to Next.js</h1>
		<p>{t('app_name')}</p>
	</main>
)}

export default Hello