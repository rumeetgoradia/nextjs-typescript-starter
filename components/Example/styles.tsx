import styled from "styled-components"

export const StyledExample = styled.div`
	color: ${({ theme }) => theme.palette.primary.main};
	padding: ${({ theme }) => theme.spacing(4)}px;
`
