import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Text from '../components/typography/text';
import Title from '../components/typography/title';
import OrganizationCard from '../components/team/organization-card';
import TeamMemberCard from '../components/team/team-member-card';

export default function Sponsors(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title='Team'
            description={`${siteConfig.tagline}`}>
            <main className='p-4 md:p-12'>
                <Title>Team</Title>

                <Title level={3}>Active Team</Title>
                <Text>The active Reality Toolkit team works on core functionality, platform support and overall direction of the toolkit.</Text>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <TeamMemberCard name={'Dino Fejzagić'} description={'Dino is a seasoned Unity developer and has been leading development of the Reality Toolkit since "The Forkening". He\'s passionate about mixed reality technology and operates a consultancy for enterprise mixed reality solutions in Germany. Whenever he can catch a break from work, he also loves to work on his VR games. Some of them might actually make it to release, hopefully.'} imageSrc={'img/dino.png'} gitHubProfile={'https://github.com/FejZa'} xProfile={'https://x.com/_din0m1te'} />
                    <TeamMemberCard name={'Simon Jackson'} description={'Simon has been a tinkerer, engineer, problem solver, and solution gatherer ever since his early years. In short, he loves to break things apart, figure out how they work, and them put them back together; usually better than before. Simon is taking the lead on development of the Service Framework, which serves as a foundation to the Reality Toolkit as well.'} imageSrc={'img/simon.jpg'} gitHubProfile={'https://github.com/SimonDarksideJ'} xProfile={'https://x.com/SimonDarksideJ'} />
                </div>

                <Title level={3}>Sponsors & Supporters</Title>
                <Text>These amazing companies and individuals are supporting the toolkit's development either using funds for development or providing infrastructure and other resources to keep the project going.</Text>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <OrganizationCard name='CodeEffect' description={'CodeEffect GmbH is a team of 3D and XR experts. We are consulting, design and implementation partners for clients from all over the world.'} logoSrc={'img/Logo-CodeEffect-Full-Light.png'} url={'https://www.codeeffect.io/'} />
                    <OrganizationCard name='Ethar Inc.' description={'Ethar is transforming human relationships with people, places and things through immersive technology. Leverage our XR integration toolset to bring your organization and projects into the next dimension.'} logoSrc={'img/ETHAR_Logo_Guide_2022_Approved-20.png'} url={'https://www.ethar.com/'} />
                    <OrganizationCard name='Dinomite Studios' description={'Dinomite is a full-service game design and development studio in Germany, specializing in immersive VR games and storytelling.'} logoSrc={'img/Dinomite-Main-Logo-Dark.png'} url={'https://www.dinomitestudios.com/'} />
                </div>

                <Title level={3}>Acknowledgements</Title>
                <Text>The Reality Toolkit was originally based on the MRTK (Mixed Reality Toolkit), created by Microsoft as a successor to the popular HoloToolkit. While the Reality Toolkit took its own path eversince and does things differently in many areas, we'd like to recognize a few people who have left their signature on its journey:</Text>
                <ul>
                    <li><a href='https://github.com/stephenhodgson' title='Stephen Hodgson'><Text compact>Stephen Hodgson</Text></a></li>
                    <li><a href='https://github.com/Cangi' title='Rony Portelli'><Text compact>Rony Portelli</Text></a></li>
                </ul>
            </main>
        </Layout>
    );
}
