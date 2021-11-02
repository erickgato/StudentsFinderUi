import React from 'react'
import { DocumentTemplateProps } from './DocumentTemplate.interface'
import { Container } from './styles';

export function DocumentTemplate({ children }: DocumentTemplateProps): JSX.Element {
	return (
		<Container>
			{children}
		</Container>
	)
}
