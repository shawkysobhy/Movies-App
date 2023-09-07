/** @format */

import { useEffect, useRef, useState } from 'react';
import { Star } from './Star';
const styles = {
	ratingContainer: {
		backgroundColor: 'black',
		padding: '1rem',
		borderRadius: '10px',
		display: 'flex',
		alignItems: 'center',
		gap: '1.25rem',
	},
	startContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
};
export const StartRating = ({
	maxRating = 5,
	color = 'yellow',
	bgColor = '#343a40',
	size = '1rem',
	handleUserRating,
}) => {
	const [selectedStarts, setStarts] = useState(0);
	const [selectedTempStars, setSelectedTempStars] = useState(0);
	const ratingCountRef = useRef(0);
	useEffect(() => {
		if (selectedStarts) ratingCountRef.current++;
		console.log('rating count', ratingCountRef.current);
	}, [selectedStarts]);
	return (
		<div
			className={'ratingContainer'}
			style={{ ...styles.ratingContainer, backgroundColor: bgColor }}>
			<div className={'startContainer'} style={styles.startContainer}>
				{Array.from({ length: maxRating }, (_, i) => {
					return (
						<Star
							size={size}
							color={color}
							filled={false}
							key={i}
							onClick={() => {
								handleUserRating(i + 1);
								setStarts(i + 1);
							}}
							onHoverIn={() => {
								setSelectedTempStars(i + 1);
							}}
							onHoverOut={() => setSelectedTempStars(0)}
							fill={
								selectedTempStars
									? selectedTempStars >= i + 1
									: selectedStarts >= i + 1
							}
						/>
					);
				})}
			</div>
			<span style={{ color: 'white' }}>
				{selectedTempStars || selectedStarts || ``}
			</span>
		</div>
	);
};
