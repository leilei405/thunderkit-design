import React from 'react';

export interface UploadProps {
    action: string;
    onProgress?: (percent: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
}