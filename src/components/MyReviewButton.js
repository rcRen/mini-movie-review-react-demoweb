import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyReviewButton() {
	return (
		<div>
			<Link to="/MyReview">
				<Button variant="primary">My Reviews</Button>
			</Link>
		</div>
	);
}
export default MyReviewButton;