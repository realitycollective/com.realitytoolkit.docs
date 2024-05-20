import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Title from '../components/typography/title';
import Text from '../components/typography/text';
import ShowcaseGrid from '../components/showcase/showcase-grid';

export default function Showcase(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Showcase'
            description={`${siteConfig.tagline}`}>
            <main className='p-4 md:p-12'>
                <Title>Showcase</Title>
                <Text>Apps and Games made with and powered by the Reality Toolkit. If you have used the Reality Toolkit to create, please let us know and we'll list it here!</Text>
                <ShowcaseGrid />
            </main>
        </Layout>
    );
}
