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
        <p className='absolute bottom-0 left-0 right-0 text-center text-sm'><span>Copyright © 2022-{new Date().getFullYear()} Reality Collective.</span> <span className='text-nowrap'>All rights reserved.</span></p>
      </main>
    </Layout>
  );
}
