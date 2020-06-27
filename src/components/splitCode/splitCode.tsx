import React, { Suspense } from 'react'
import './splitCode.scss'
import { Upload, message, Button, Divider } from 'antd'
const Test = React.lazy(() => import('@/pages/Test/Test'))
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class SplitCodeComp extends React.Component {
    state = {
        isShowTest: false
    }

    onShoutTest = () => {
        this.setState({
            isShowTest: true
        })
    }

    render () {
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info: any) {
              const { status } = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
        return (
            <div className='container'>
                <div>
                    suspense and lazy
                </div>
                {
                    this.state.isShowTest ? 

                    <Suspense fallback={ <div>loading....</div> }>
                        <Test /> 
                    </Suspense>
                        : 'nonw'
                }
                <Divider type='horizontal' />
                <Button type='primary' onClick={ this.onShoutTest }>
                    shou Test
                </Button>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                </Dragger>
            </div>
        )
    }
}

export default SplitCodeComp