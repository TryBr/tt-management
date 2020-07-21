import React, { Fragment } from "react";

import { Progress, PageHeader, Select, Row, Col , 
    Steps, Comment, Avatar, Form, Button, List, Input, Table, Tabs, Radio } from 'antd';


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

    let { id } = useParams();
    let { url } = useRouteMatch();

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
                        <Form layout={"vertical"} size={"middle"}>
                            <Form.Item label="Имя">
                            <Input value={owner[id].fio} />
                            </Form.Item>
                            <Form.Item label="Фамилия">
                            <Input value={owner[id].fio} />
                            </Form.Item>
                            <Form.Item label="Отчество">
                            <Input value={owner[id].fio} />
                            </Form.Item>
                            <Form.Item label="Контактный телефон">
                            <Input value={owner[id].phone} />
                            </Form.Item>
                            <Form.Item label="Электронная почта">
                            <Input value={owner[id].email} />
                            </Form.Item>
                            <Form.Item label="Юридическая форма">
                            <Input value={owner[id].legalForm} />
                            </Form.Item>
                            <Form.Item label="Вид рассчета">
                            <Input value={owner[id].payType} />
                            </Form.Item>
                            <Form.Item label="Лицевой счет">
                            <Input value={owner[id].accountNumber} />
                            </Form.Item>

                            <Form.Item>
                            <Button type="primary">Сохранить</Button>
                            <Button type="default">Отмена</Button>
                            </Form.Item>
                        </Form>
                </Col>
            </Row>
            
        </div>
    );

}

export default OwnerEdit;