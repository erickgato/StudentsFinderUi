import React from 'react'
import { Container } from '@material-ui/core'
import { DocumentTemplateProps } from './DocumentTemplate.interface'

export function DocumentTemplate({ children }: DocumentTemplateProps): JSX.Element {
	return (
		<Container maxWidth="xl">
			{children}
		</Container>
	)
}
