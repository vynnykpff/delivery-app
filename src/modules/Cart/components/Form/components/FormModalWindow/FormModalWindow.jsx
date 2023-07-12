import {
	CloseButton, DescriptionOfWay,
	MapImage,
	MapInfoBlock,
	OrderTitle,
	TitleWay
} from "../../../../../../shared/components/ModalWindow/ModalWindow.styled.jsx";
import {GrFormClose} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import {history} from "../../../../../../shared/constants/routes.js";
import {removeAllProducts} from "../../../../../../redux/products/products.slice.js";
import {useDispatch} from "react-redux";
import ModalWindow from "../../../../../../shared/components/ModalWindow/ModalWindow.jsx";

const FormModalWindow = ({modalActive, setModalActive, status, way, descriptionWay}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		setModalActive(false)
		dispatch(removeAllProducts());
		navigate(history);
	}

	return (
		<ModalWindow active={modalActive} setActive={setModalActive}>
			{status ?
				<>
					<CloseButton onClick={handleClick}><GrFormClose/></CloseButton>
					<MapInfoBlock>
						<OrderTitle>The order has been processed</OrderTitle>
						<TitleWay>Way from <span
							style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.locations[1]?.adminArea5}</span> to <span
							style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.locations[0]?.adminArea5}</span></TitleWay>
						<MapImage
							src={`https://www.mapquestapi.com/${way}`}/>
						<DescriptionOfWay>
							<p>Distance: <span
								style={{color: 'var(--accent-color)'}}>{Math.round(descriptionWay?.route?.distance * 100) / 100}</span> km
							</p>
							<p>Delivery Time: <span
								style={{color: 'var(--accent-color)'}}>{descriptionWay?.route?.formattedTime}</span></p>
						</DescriptionOfWay>
					</MapInfoBlock>
				</>
				: <div>Loading</div>
			}
		</ModalWindow>
	);
};

export default FormModalWindow;