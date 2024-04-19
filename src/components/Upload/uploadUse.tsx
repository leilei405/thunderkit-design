import React, { FC } from "react";

import { action } from "@storybook/addon-actions";

import Upload from "./upload";

export const UploadUseCom: FC = () => {
  // 检测文件大小
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert("File size Big");
      return false;
    }
    return true;
  };

  return (
    <div>
      <Upload
        action="https://jsonplaceholder.tyicode.com/posts/"
        // onProgress={action("progress")}
        // onSuccess={action("success")}
        // onError={action("error")}
        onChange={action("changed")}
        beforeUpload={checkFileSize}
      />
      <div>
        <form
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          encType="multipart/form-data"
          method="post"
        >
          <input type="file" name="myfile" />
          <button type="submit">上传</button>
        </form>
      </div>
    </div>
  );
};
