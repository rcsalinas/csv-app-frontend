import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit">Roberto Salinas</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	)
}

export default Copyright
