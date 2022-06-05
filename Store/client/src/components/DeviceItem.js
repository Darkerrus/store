import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/Vector.png'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-2" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="mt-3" style={{width: 150,  cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-center justify-content-between">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;