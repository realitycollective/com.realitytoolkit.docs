import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Community(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Community'
            description={`${siteConfig.tagline}`}>
            <main>

            </main>
        </Layout>
    );
}
