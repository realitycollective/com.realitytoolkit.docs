import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Sponsors(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Sponsors'
            description={`${siteConfig.tagline}`}>
            <main>
                
            </main>
        </Layout>
    );
}
