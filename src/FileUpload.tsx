import React, {useEffect, useRef, useState} from 'react';
import {ReactComponent as Icon} from "./Icon.svg";
import { SimpleBox, ProgressBox, ProgressLine, Percentage, CancelButton, Button, Title, Text, ProgressTitle, ProgressBar } from './styles';

interface FileUploadProps {
    onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({onFileUpload}) => {
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadStarted, setUploadStarted] = useState<boolean>(false);
    const [uploadCancelled, setUploadCancelled] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (uploadCancelled) {
            setUploadStarted(false);
            setUploadProgress(0);
            setUploadCancelled(false);
        }
    }, [uploadCancelled]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            uploadFile(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file) {
            uploadFile(file);
        }
    };

    const uploadFile = (file: File) => {
        const maxIncrement = 10;

        let progress = 0;

        const uploadTimer = setInterval(() => {
            const increment = Math.floor(Math.random() * maxIncrement) + 1;
            progress += increment;

            if (progress >= 100) {
                clearInterval(uploadTimer);
                progress = 100;
            }

            setUploadProgress(progress);
        }, 500);

        setUploadStarted(true);
        onFileUpload(file);
    };

    const handleCancelUpload = () => {
        clearInterval(uploadTimer);
        setUploadCancelled(true);
    };

    let uploadTimer: NodeJS.Timeout;

    return (
        <div>
            {!uploadStarted && (
                <SimpleBox
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Title>
                        Add file to check container or start signing by uploading documents
                    </Title>

                    <Button type="button"><Icon/> Add file(s)</Button>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{display: 'none'}}
                    />
                    <Text>or drop document(s) here</Text>
                </SimpleBox>
            )}
            {uploadStarted && uploadProgress > 0 && uploadProgress < 100 && (
                <SimpleBox>
                    <ProgressTitle>Uploading file(s)</ProgressTitle>
                    <ProgressBox>
                        <ProgressBar>
                            <ProgressLine progress={uploadProgress} />
                        </ProgressBar>
                        <Percentage>{uploadProgress}%</Percentage>
                    </ProgressBox>
                    <CancelButton onClick={handleCancelUpload}>Cancel</CancelButton>
                </SimpleBox>
            )}
        </div>
    );
};

export default FileUpload;