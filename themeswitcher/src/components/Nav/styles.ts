import styled from 'styled-components';

export const TamanhoImagem = styled.img`
      width: 230px;
     height: 240px;
     align-items:center;
     justify-content: center;

`;

export const Container = styled.div`
  display: block;
	width: 450px;
	margin: 20px auto;
  
`;
export const TitleForm = styled.div`
  background-color: ${props => props.theme.colors.primary};
  font-size: 25px;
  padding: 6px;
  
`;

export const FormGroup = styled.div`
	 display: block;
	width: 300px;
	margin: 20px auto;
`;

export const Label = styled.label`
	color: ${props => props.theme.colors.primary};
  display: block;
  font-weight:bold;
  font-size: 18px; 
`;

export const Input = styled.input`
  padding: 6px;
  color: ${props => props.theme.colors.textColor};
	background: ${props => props.theme.colors.textInput};
	border: none;
	border-radius: 3px;
	width: 100%;
  font-size: 16px;

`;

export const Button = styled.button`
  padding: 10px 15px 10px 15px;
  color:${props=> props.theme.colors.text};
  background-color:${props=> props.theme.colors.primary};
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 0 0 0;
  border: 0 none;
  justify-content: flex-end;
  :hover {
		background-color:${props=> props.theme.colors.secudary} ;
		cursor: pointer;
	}

`;