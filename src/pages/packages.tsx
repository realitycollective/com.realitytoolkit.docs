import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Text from '../components/typography/text';
import PackageGrid from '../components/packages/package-grid';

export default function Packages(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Sponsors'
            description={`${siteConfig.tagline}`}>
            <main className='p-4 md:p-12'>
                <h1 className='mb-4 md:mb-8'>Packages</h1>
                <Text>The Reality Toolkit is modular and you can pick the modules you need from below list of officially supported packages.</Text>
                <PackageGrid />
            </main>
        </Layout>
    );
}
