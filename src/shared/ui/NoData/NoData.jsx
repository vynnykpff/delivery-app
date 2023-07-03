import styles from './NoData.module.css';

const NoData = ({image, icon = null}) => {
	return (
		<div className={styles.wrapperImage}>
			{icon ? <span className={styles.noDataIcon}>{icon}</span> : <img className={styles.noDataImage} src={image} alt="empty-icon"/>}
		</div>
	);
};

export default NoData;