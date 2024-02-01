import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='About'
            description={`${siteConfig.tagline}`}>
            <main>
                
            </main>
        </Layout>
    );
}
