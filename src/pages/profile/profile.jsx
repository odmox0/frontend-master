
import React, { useState } from 'react';
import General from "../../layout/general/general"
import { Link } from 'react-router-dom';
import { Button, message, Steps, Row, Col } from 'antd';

const Profile = () =>  {
    const [current, setCurrent] = useState(0);

    const steps = [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
    ];
    const next = () => {
        setCurrent(current + 1);
    };
    
    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <General>
            
            <Row>
                <Col span={24}> </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Steps current={current} items={items} />
                    <div>{steps[current].content}</div>
                    <div style={{ marginTop: 24 }}>
                        {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                        )}
                        {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </General>
    )
}
export default Profile;