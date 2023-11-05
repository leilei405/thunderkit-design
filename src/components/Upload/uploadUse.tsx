import React, { FC } from 'react';

import { action } from '@storybook/addon-actions'

import Upload from './upload';

export const UploadUseCom: FC = () => {
    return (
        <div>
            <Upload
                action='https://jsonplaceholder.tyicode.com/posts/'
                onProgress={action("progress")}
                onSuccess={action("success")}
                onError={action("error")}
            />
        </div>
    )
}
