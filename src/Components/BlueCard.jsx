import Card from 'react-bootstrap/Card';
import "../styles/BlueCard.css"
function BlueCard(props) {
	return (
		<Card className='card' style={{ width: 'calc(25% - 10px)', margin: "10px 5px 10px 5px", height: "350px", backgroundColor: "#3a77ff", color: 'white' }}>
			<Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
				<Card.Title style={{ display: 'flex', width: '100%', position: 'relative' }}>
					<div className='yourStuffTitle'>
						Want to see your stuff here?
					</div>
				</Card.Title>
				<div className='yourStuffText'>
					Make some extra cash by selling things in your community. Go on, it's quick and easy.
				</div>
				<div className='startSellingBtn'>
					Start selling
				</div>
			</Card.Body>
		</Card>
	);
}

export default BlueCard;