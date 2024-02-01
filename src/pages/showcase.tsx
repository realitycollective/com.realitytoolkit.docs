import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Showcase(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Showcase'
            description={`${siteConfig.tagline}`}>
            <main>

            </main>
        </Layout>
    );
}
