import React from 'react';

const Image = ({ gif }) => {
	return (
		<img src={gif} alt="character-idle-animation" className='character_image' />
	)
}

export default Image;