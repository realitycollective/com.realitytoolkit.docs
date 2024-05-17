import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Text from '../components/typography/text';

export default function Sponsors(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Sponsors'
            description={`${siteConfig.tagline}`}>
            <main className='p-4 md:p-12'>
                <h1 className='mb-4 md:mb-8'>Sponsors</h1>
                <Text>The Reality Toolkit would not be possible without its sponsors and contributors. Learn more about them here and how you can support the toolkit's development as well.</Text>

                <h2 className='mb-4 md:mb-8'>Become A Sponsor</h2>
                <Text>Apart from contribution via opened issues, pull requests and community help, you can choose to support the development financially by sponsoring its contributors on GitHub.</Text>
            </main>
        </Layout>
    );
}
