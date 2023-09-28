import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import Routes from './routes';
import Container from '@material-ui/core/Container';
import reportWebVitals from './reportWebVitals';
import './styles/global.css'

ReactDOM.render(
    <React.StrictMode>
        <Container sx={{ p: 0 }}>
            <Layout>
                <Routes/>
            </Layout>
        </Container>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
