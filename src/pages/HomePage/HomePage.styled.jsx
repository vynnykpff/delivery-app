import styled from "@emotion/styled";
import {FaPlay} from "react-icons/fa";
import {AiFillStar} from "react-icons/ai";

export const HomePageWrapper = styled.div`
  display: flex;
	justify-content: space-around;
  margin: 60px 0;
	
`;

export const Title = styled.h2`
  color: var(--accent-color);
  font-size: 90px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.h3`
  color: var(--secondary-color);
  font-size: 40px;
  font-weight: 700;
  line-height: 94.8%;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
	align-items: center;
	position: relative;
	column-gap: 17px;
`;

export const LeftPartWrapper = styled.div`
	max-width: 568px;
`;

export const PlaneImage = styled.img`
	width: 120px;
	position: absolute;
	top: -70px;
	right: 135px;
`;

export const FastFoodImage = styled.img`
	width: 550px;
`;

export const Tizer = styled.p`
  color: var(--tizer-color);
  font-size: 22px;
	margin: 24px 0 44px 0;
`;

export const OrderButton = styled.button`
  color: var(--background-color);
  font-size: 20px;
  font-weight: 600;
  width: 188px;
  height: 70px;
  border-radius: 84px;
  background: var(--secondary-color);
  box-shadow: 0 20px 32px -8px rgba(0, 0, 0, 0.20);
	margin-right: 28px;
`;

export const WatchVideoWrapper = styled.div`
  display: flex;
	align-items: center;
`;

export const WatchVideoButton = styled.button`
  display: flex;
	justify-content: center;
	align-items: center;
  width: 57px;
  height: 57px;
	border-radius: 50%;
	outline: none;
	border: none;
	background: var(--play-button-color);
	margin-right: 11px;
	padding: 0;
`;

export const PlayIcon = styled(FaPlay)`
	font-size: 20px;
`;

export const WatchVideoText = styled.p`
  color: var(--secondary-color);
  font-size: 20px;
  font-weight: 600;
`;

export const StarsWrapper = styled.div`
	margin-top: 60px;
`;

export const StarIcon = styled(AiFillStar)`
	color: #FEBB41;
	font-size: 20px;
`;

export const StarsTitle = styled.p`
	margin: 11px 0 8px 0;
  color: var(--secondary-color);
  font-size: 18px;
  font-weight: 600;
`;

export const StarsSubtitle = styled.p`
	margin: 0;
  color: var(--tizer-color);
  font-size: 18px;
  font-weight: 300;
`;