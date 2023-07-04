import ImageFastFood from '../../shared/images/home/01.png';
import ImageWay from '../../shared/images/home/02.png';
import {
	FastFoodImage,
	HomePageWrapper,
	LeftPartWrapper,
	OrderButton,
	PlaneImage,
	PlayIcon,
	StarIcon, StarsSubtitle, StarsTitle, StarsWrapper,
	Subtitle,
	Title,
	Tizer,
	WatchVideoButton,
	WatchVideoText,
	WatchVideoWrapper,
	Wrapper
} from "./HomePage.styled.jsx";

const HomePage = () => {
	const starsArray = [1, 2, 3, 4, 5];

	return (
		<HomePageWrapper>
			<div>
				<LeftPartWrapper>
					<Wrapper>
						<Title>Fast</Title>
						<Subtitle>Food <br/> Delivery</Subtitle>
						<PlaneImage src={ImageWay} alt=""/>
					</Wrapper>
					<Tizer>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</Tizer>
					<div>
						<WatchVideoWrapper>
							<OrderButton>Order Now</OrderButton>
							<WatchVideoButton><PlayIcon/></WatchVideoButton>
							<WatchVideoText>Watch Video</WatchVideoText>
						</WatchVideoWrapper>
					</div>
					<StarsWrapper>
						{starsArray.map(star => <StarIcon key={star}/>)}
						<StarsTitle>5 star rating</StarsTitle>
						<StarsSubtitle>based on 1788 reviews</StarsSubtitle>
					</StarsWrapper>
				</LeftPartWrapper>
			</div>
			<FastFoodImage src={ImageFastFood} alt=""/>
		</HomePageWrapper>
	);
};

export default HomePage;