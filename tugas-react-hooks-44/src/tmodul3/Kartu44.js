import React, { Component } from "react";
import { Card, Col, Row } from 'antd';
import { Typography, Button } from 'antd';
import { MehOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";

import '../App.css';

const { Title } = Typography;

function Kartu(props) {
    return (
        <div>
            <Title level={4}>{props.nama}</Title>
            <Title level={4} style={{ marginTop: '0' }}>{props.nim}</Title>
            <Button 
                type="text" 
                size="large" 
                shape="circle"
                icon={<MehOutlined />}
                // icon={props.sIcon ? <MehOutlined /> : <SmileTwoTone />} 
                // onClick={}/>
            />
        </div>
    );
}

export default class Kartu44 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prak: ['1', '2'],
            nama: ['M. Rizqi Alfani', 'Yarnish Dwi Sagita F.'],
            nim: ['21120117140007', '21120117130049'],
            sIcon: true
        };
    }

    render() {
        return (
            <div className="site-card-wrapper" style={{}}>
                <Row gutter={8}>
                    <Col span={12}>
                        <Card id={'kartu'} title={'PRAKTIKAN ' + this.state.prak[0]} bordered={false} style={{ width: '50%', margin: '0 25% 0 25%', background: '#89CFF0 !important' }}>
                            <Kartu nama={this.state.nama[0]} nim={this.state.nim[0]} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title={'PRAKTIKAN ' + this.state.prak[1]} bordered={false} style={{ width: '50%', margin: '0 25% 0 25%' }}>
                            <Kartu nama={this.state.nama[1]} nim={this.state.nim[1]} />
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
} 