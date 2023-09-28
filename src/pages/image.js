import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Image = () => {

    const [path, setPath] = useState()

    useEffect(() => {
        const pathName = window.location.pathname
        const splitPath = pathName.split('image')
        setPath(splitPath[1])

    }, [path])

    return (
        <Container
            align="center"
            sx={{
                mt: '40px',
                animation: '1s fadein'
            }}
        >
            <img
                src={path}
                alt="graphics"
                width="100%"
            />
            <Button
                variant="contained"
                sx={{ mt: '20px' }}
                onClick={() => window.history.back()}
            >
                Back
            </Button>
        </Container>
    )
}

export default Image
