import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hello from '../components/hello';

export default () => 
	(
	<main>
		<h1>Welcome to Next.js</h1>
		<Hello />
	</main>
)



export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}