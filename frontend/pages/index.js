import styled from 'styled-components';
import Center from '../components/styles/Center';

const HomePageMainMessage = styled.div`
  font-size: 6rem;
  text-align: center;
`;

const BrandStyle = styled.span`
  color: ${props => props.theme.green};
`;

const HomePageSubMessage = styled.div`
  font-size: 3rem;
  text-align: center;
`;

const HomePagePhoto = styled.img`
  width: 400px;
`;

const Home = () => (
  <Center>
    <HomePageMainMessage>
      Welcome to <BrandStyle>futugram</BrandStyle>
    </HomePageMainMessage>
    <HomePagePhoto src="/static/logo.png" />
    <HomePageSubMessage>
      A place where you can share your photo
    </HomePageSubMessage>
  </Center>
);

export default Home;
