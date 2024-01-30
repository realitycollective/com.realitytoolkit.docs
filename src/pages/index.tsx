import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/hero-section/hero-section';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Home'
      description={`${siteConfig.tagline}`}
      noFooter={true}>
      <main>
        <HeroSection />
      </main>
    </Layout>
  );
}
