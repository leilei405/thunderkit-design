import React, { ChangeEvent, FC, useRef } from "react";

import classNames from "classnames";

import axios from "axios";

import { UploadProps } from "./types";

import Button from "../Button/button";

const Upload: FC<UploadProps> = (props) => {
    const { action, onError, onProgress, onSuccess } = props;

    // 通过ref获取DOM节点
    const fileInput = useRef<HTMLInputElement>(null)

    // 点击触发
    const handleClick = () => {
        if (fileInput.current) return fileInput.current.click();
    }

    const uploadFile = (files: FileList) => {
        let postFiles = Array.from(files)
        postFiles.forEach(file => {
            const formData = new FormData()
            formData.append(file.name, file)
            axios.post(action, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (e: any) => {
                    let percentage = Math.round((e.loaded * 100) /  e.total) || 0;
                    if (percentage < 100) {
                        if (onProgress) {
                            onProgress(percentage, file)
                        }
                    }
                }
            }).then(res => {
                console.log(res, "=======res====");
                if (onSuccess) {
                    onSuccess(res.data, file)
                }
            }).catch(err => {
                console.error(err, '====error====');
                if (onError) {
                    onError(err, file)
                }
            })
        })
    }

    // 点击选择文件
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files) {
            return
        }
        uploadFile(files);
        if (fileInput.current) {
            fileInput.current.value = ""
        }
    }

    return (
        <div className="thunderkit-upload-component">
            <Button 
                btnType="primary"
                onClick={handleClick}
            >
                上传
            </Button>
            <input
                className="thunderkit-file-upload"
                style={{ display: 'none'}}
                onChange={handleFileChange}
                ref={fileInput}
                type="file"
            />
        </div>
    )
}

export default Upload