import React, { Fragment } from "react";

import { Progress, PageHeader, Select, Row, Col , 
    Steps, Comment, Avatar, Form, Button, List, Input, Table, Tabs } from 'antd';

    import {
        Link,
        useParams,
        useRouteMatch
    } from "react-router-dom";


const { TabPane } = Tabs;
const { Column } = Table;

// name: 'Причина задачи',
// info: 'Малое потребление холодной воды'

const tableColumns = [
    {
        label: 'Адрес проживания',
    },
    {
        label: 'Контактный телефон',
    },
    {
        label: 'Номер лицевого счета',
    },
    {
        label: 'Электронная почта',
    },
    {
        label: 'Юридическая форма',
    },
    {
        label: 'Платежный код',
    },
    {
        label: 'Статус собственника',
    },
    {
        label: 'Вид рассчета',
    },
];


const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z" fill="#272F5A"/>
    </svg>
);

const TimeIcon = () => (
    <svg className="time-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H10V2H8.5V3.02054C11.5798 3.27461 14 5.85467 14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 5.85467 4.42023 3.27461 7.5 3.02054V2H6V1ZM13 9C13 11.7614 10.7614 14 8 14C5.23858 14 3 11.7614 3 9C3 6.23858 5.23858 4 8 4C10.7614 4 13 6.23858 13 9ZM7.5 5V9V9.23419L7.67991 9.38411L10.3598 11.7682L11 11L8.5 8.76581V5H7.5Z" fill="#272F5A" fill-opacity="0.6"/>
    </svg>
);

const EditIcon = () => (
    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8ZM2 15.5C2.82843 15.5 3.5 14.8284 3.5 14C3.5 13.1716 2.82843 12.5 2 12.5C1.17157 12.5 0.5 13.1716 0.5 14C0.5 14.8284 1.17157 15.5 2 15.5Z" fill="#272F5A"/>
    </svg>
);

const Owner = ({ owner }) => { 

    let { id } = useParams();
    let { url } = useRouteMatch();

    return (
        <div className="owner-detail">
            <Link to={`/owners`}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Назад"
                    backIcon={<BackIcon />}
                />
            </Link>
            <h1 className="page-title">{owner[id].fio}</h1>
            <Link to={`${url}/edit`}>
                <Button type="default" className="button-edit" icon={<EditIcon />}></Button>
            </Link>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Общие данные" key="1">
                    <Row>
                        <Col span={16}>
                            <div className="owner-information">
                                <div className="title">Информация</div>

                                <table>
                                    <tr>
                                        <td>{tableColumns[0].label}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="owner-tasks">
                                <div className="title">Связанные задачи</div>
                                <div className="task">
                                    <div className="task-title">
                                        Назначить сотрудника для проведения внеплановой проверки
                                    </div>
                                    <div className="task-subtitle">
                                        Некорректные показания
                                    </div>
                                    <div className="task-time">
                                        <TimeIcon />
                                        <span className="time-title">Время на этап: 36д 12ч (до 6.12.19)</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );

}

export default Owner;