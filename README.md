# File Upload Component

This project provides a custom file upload component built with React and TypeScript. The component allows users to select files through a custom-styled button or by dragging and dropping files into the designated area. The component includes an upload progress bar with a cancel button.

## Features

- Choose files by clicking the browse button or dragging and dropping them
- Upload progress bar with percentage indicator
- Cancel button to stop the upload process
- Custom styling for the file upload button

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

   ```bash
   cd file-upload-component
   ```

3. Install the dependencies:

   ```bash
    npm install
    ```

4. Start the development server:
   ```bash
    npm start
    ```
   
## Usage


```javascript
import React from 'react';
import FileUpload from './FileUpload';

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle the file upload logic here
    console.log('File uploaded:', file.name);
  };

  return (
    <div>
      <h1>File Upload Example</h1>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;
```

In the above example, the FileUpload component is imported and rendered within the App component. You can provide a callback function to the onFileUpload prop to handle the file upload logic according to your specific requirements.

## Customization

The component uses styled components for styling, allowing you to easily customize the appearance of the file upload button, progress bar, and other elements. You can modify the styles in the component file to match your desired design.

