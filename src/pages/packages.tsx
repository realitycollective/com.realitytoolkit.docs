import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Text from '../components/typography/text';
import PackageGrid from '../components/packages/package-grid';
import Title from '../components/typography/title';

export default function Packages(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Packages'
            description={`${siteConfig.tagline}`}>
            <main className='p-4 md:p-12'>
                <Title>Packages</Title>
                <Text>The Reality Toolkit is modular and you can pick the modules you need from below list of officially supported packages. You'll also find down below a list of packages currently in development that we do not seem ready for general availability yet.</Text>
                <PackageGrid />
            </main>
        </Layout>
    );
}
