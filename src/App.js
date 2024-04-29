import './App.css';
import { Container, Typography } from '@mui/material';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Container sx={{bgcolor: "#212121"}}>
      <Typography>Fundraising Solutions</Typography>
    </Container>
    <Footer />
    </>
  );
}

export default App;
