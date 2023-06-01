import {Container} from "../layout/Layout.styled.jsx";
import {FooterWrapper, RightsBlock} from "./Footer.styled.jsx";
import {LogoImage} from "../header/navbar/Navbar.styled.jsx";
import logo from '../../../assets/images/logo.png';

const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<LogoImage src={logo} alt="footer logo">
				</LogoImage>
			</Container>
			<RightsBlock>All rights reserved © 2023. vynnykpff</RightsBlock>
		</FooterWrapper>
	);
};

export default Footer;