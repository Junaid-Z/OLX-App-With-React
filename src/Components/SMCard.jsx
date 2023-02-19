import Card from 'react-bootstrap/Card';

function SMCard(props) {
	let { location, title, imageLink, price } = props
	return (
		<Card style={{ margin: "10px 5px 10px 5px", height: "350px" }}>
			<div className='cardImg' style={{ width: "100%", height: "150px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222' }}>
				<img src={imageLink} alt="" style={{ height: "100%", width: "100%", objectFit: 'contain' }} />
			</div>
			<Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
				<Card.Title style={{ display: 'flex', width: '100%', position: 'relative', paddingRight: '22px' }}>
					{title}
					<div className='favorite'>
						<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
							<path d="M831 449L512 839 194 450a155 155 0 11274-132h88a155 155 0 11275 131zM706 124c-81 0-152 42-194 104a233 233 0 10-379 270l329 402h100l330-403a233 233 0 00-186-372z" fill="#002f34">
							</path>
						</svg>
					</div>
				</Card.Title>
				<h5>{price}</h5>
				<Card.Text style={{ marginTop: 'auto' }}>
					{location}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default SMCard;