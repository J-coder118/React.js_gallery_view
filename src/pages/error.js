import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Error = () => {
    return (
        <Container
            sx={{ mt: '40px' }}
            align="center"
        >
            <Typography
                variant="h6"
                gutterBottom
            >
                This page is not exist.
            </Typography>
            <Typography
                variant="subtitle1"
                color="text.secondary"
                component="p"
            >
                Click the Home button below.
            </Typography>
            <Button
                href="/"
                variant="contained"
                sx={{ mt: '40px' }}
            >
                Back to Home
            </Button>
        </Container >
    )
}

export default Error;
