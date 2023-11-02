import React, { Component } from 'react';
import styled from 'styled-components';
/**
 * @author:Dhivya
 * @description:Displaying Image
 * @param {*} props 
 * @returns 
 */
export default class Image extends Component {
	render(){
		//console.log("PROPS=>", this.props);
		return(
			<ImageComponent src={this.props.source} alt={this.props.text} />
		)
	}
}

const ImageComponent = styled.img`
	width: 50%;
	height: 50%;
`;