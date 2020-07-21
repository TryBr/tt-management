import React, { Fragment, useState } from "react";

import { PageHeader, Row, Col, Form, Button, Input } from 'antd';


import {
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z" fill="#272F5A"/>
    </svg>
);

const OwnerEdit = ({ owner }) => {

    const [owners, setOwners] = useState({
        owners: [],
    });

    let { id } = useParams();
    let { url } = useRouteMatch();

    const onFinish = values => {
        setOwners({
            ...state,
            owners: values
        });
        console.log('Success:', values);
    };
    
    return (
        <div className="owner-detail">
            <Link to={`/owners/${id}`}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Назад"
                    backIcon={<BackIcon />}
                />
            </Link>
            <h1 className="page-title">{owner[id].fio} Редактирование</h1>

            <Row>
                <Col span={12}>
                        <Form layout={"vertical"} size={"middle"} onFinish={onFinish}>
                            <Form.Item name="id" initialValue={owner[id].id} hidden="true">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Имя" name="name" initialValue={owner[id].fio} >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Фамилия" name="lastname" initialValue={owner[id].fio}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Отчество" name="patronymic" initialValue={owner[id].fio}> 
                                <Input />
                            </Form.Item>
                            <Form.Item label="Контактный телефон" name="phone" initialValue={owner[id].phone}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Электронная почта" name="email" initialValue={owner[id].email}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Юридическая форма" name="legalform" initialValue={owner[id].legalForm}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Вид рассчета" name="paytype" initialValue={owner[id].payType}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Лицевой счет" name="accountnumber" initialValue={owner[id].accountNumber}>
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">Сохранить</Button>
                                <Button type="default">Отмена</Button>
                            </Form.Item>
                        </Form>
                </Col>
            </Row>
            
        </div>
    );

}

export default OwnerEdit;