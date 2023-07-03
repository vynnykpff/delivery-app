import {FooterWrapper, RightsBlock} from "./Footer.styled.jsx";
import logo from '../../shared/images/logo.svg';
import {LogoImage} from "../Header/components/NavBar/NavBar.styled.jsx";
import {useEffect, useState} from "react";

const Footer = () => {
	const [year, setYear] = useState("");

	useEffect(() => {
		const date = new Date();
		setYear(date.getFullYear());
	}, [])


	return (
		<FooterWrapper>
			<LogoImage src={logo} alt="footer logo"/>
			<RightsBlock>All rights reserved © {year}. vynnykpff</RightsBlock>
		</FooterWrapper>
	);
};

export default Footer;