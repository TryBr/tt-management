import React, { Fragment } from "react";

import { Progress, PageHeader, Select, Row, Col , 
    Steps, Comment, Avatar, Form, Button, List, Input, Table, Tabs } from 'antd';

import {
    useParams
  } from "react-router-dom";


const { TabPane } = Tabs;
const { Column } = Table;

const dataSource = [
    {
    name: 'Причина задачи',
    info: 'Малое потребление холодной воды'
    },
    {
    name: 'Номер задачи',
    info: 123
    },
    {
    name: 'Дата создания',
    info: '10.08.2019   10:38'
    },
    {
    name: 'Адрес',
    info: 'Набережные Челны, Машиностроительная, 75, кв.35'
    },
    {
    name: 'Комментарий к квартире',
    info: 'ПЛАН ЖКХ-9 ОТ 10,09,17 СЧ.ИСПР!!!! план ИЦ 10.04.18 сч.испр'
    },
    {
    name: 'Теги к квартире',
    tags: ['Дедка', 'Слушает громко музыку', '10 недопусков'],
    },
    {
    name: 'Собственник 1',
    info: 'Константинопольский К.К.'
    },
    {
    name: 'Статус собственника 1',
    info: 'Передает показания'
    },
    {
    name: 'Юридическое состояние',
    info: 'Физическое лицо'
    },
    {
    name: 'Номер ЛС собственника 1',
    info: '123456789'
    },
    {
    name: 'Контактный номер телефона',
    info: '+7 999 999-99-99'
    },
    {
    name: 'Собственник 2',
    info: 'Иванова К.С.'
    },
    {
    name: 'Статус собственника 2',
    info: 'Передает показания'
    },
    {
    name: 'Юридическое состояние',
    info: 'Физическое лицо'
    },
    {
    name: 'Номер ЛС собственника 2',
    info: '123456789'
    },
    {
    name: 'Контактный номер телефона',
    info: '+7 999 999-99-99'
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

const Owner = ({ owner }) => {

    let { id } = useParams();

    return (
        <div className="owner-detail">
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Назад"
                backIcon={<BackIcon />}
            />
            <h1 className="page-title">{owner[id].fio}</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Общие данные" key="1">
                    <Row>
                        <Col span={16}>
                            <div className="owner-information">
                                <div className="title">Информация</div>

                                <Table className="owner-info-table" dataSource={dataSource} showHeader={false} pagination={false}>
                                    <Column title="name" dataIndex="name" key="name" className="name-cell" />
                                    <Column title="info" dataIndex="info" key="info" />
                                </Table>
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