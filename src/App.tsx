import React from 'react';
import FileUpload from './FileUpload';
import { Container, Box, BorderBox } from './styles'

const App: React.FC = () => {
    const handleFileUpload = (file: File) => {
        // Implement your logic to handle the uploaded file here
        console.log('Uploaded file:', file);
    };

    return (
        <Container>
            <Box>
                <BorderBox>
                    <FileUpload onFileUpload={handleFileUpload}/>
                </BorderBox>
            </Box>
        </Container>
    );
};

export default App;
