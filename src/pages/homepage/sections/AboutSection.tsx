import { Component } from 'react';
import { Container, Box, Typography } from "@mui/material";
import SectionTitle from '../../../components/SectionTitle';
import aboutImg1 from '../../../assets/images/about_img1.png';
import aboutImg2 from '../../../assets/images/about_img2.png';

export class AboutSection extends Component {
    render() {
        return (
            <Container sx={{ minHeight: '80vh', display: 'flex', border: '2px solid red' }}>
            
                    {/* Левый блок */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', border: '2px solid red' }}>
                        <img src={aboutImg1} alt="About Image 1" style={{ width: '230px', height: '255px', objectFit: 'cover' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Typography variant="body2" sx={{ color: 'text.primary', fontFamily: 'Anton', fontSize: '14px' }}>
                                Satisfied Customers
                            </Typography>
                            <Typography variant="h1" sx={{ color: 'accent.main', fontFamily: 'Anton', fontSize: '64px', fontWeight: 400, ml: 1 }}>
                                25
                            </Typography>
                        </Box>
                    </Box>

                    {/* Средний блок */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', border: '2px solid red' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h1" sx={{ color: 'accent.main', fontFamily: 'Anton', fontSize: '64px', fontWeight: 400 }}>
                                8
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.primary', fontFamily: 'Anton', fontSize: '14px', ml: 1 }}>
                                Year of experience
                            </Typography>
                        </Box>
                        <img src={aboutImg2} alt="About Image 2" style={{ width: '230px', height: '255px', objectFit: 'cover', marginTop: '56px' }} />
                    </Box>

                    {/* Правый блок */}
                    <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', border: '2px solid red' }}>
                        <SectionTitle index={1} title={"About Me"}/>
                        <Typography variant="body2" sx={{ maxWidth: '430px', mt: 2, textAlign: 'left' }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </Typography>
                    </Box>
            
            </Container>
        );
    }
}
