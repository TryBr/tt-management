import React, { Component, Fragment } from 'react';

import { Layout, Progress, PageHeader, Select, Row, Col , 
        Steps, Comment, Avatar, Form, Button, List, Input, Table, Tag, Space } from 'antd';


export default class TaskDetail extends Component {
    render() {
        return(
            <Fragment>
                <PageHeader
                  className="site-page-header"
                  onBack={() => null}
                  title="Назад"
                  backIcon={<BackIcon />}
                />
                <h1 className="page-title">Назначить сотрудника для проведения внеплановой проверки</h1>
                <div className="progress-wrapper">
                  <div className="progress-title">Неккоректные показания</div>
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar">
                      <Progress percent={50} showInfo={false} strokeWidth={4} strokeColor={"#17B45A"} />
                    </div>
                    <div className="progress-info">
                      <div className="info-title">
                        Время на задачу
                      </div>
                      <div className="info-time">
                        36д 12ч (до 6.12.19)
                      </div>
                    </div>
                  </div>
                  <div className="progress-time">
                    <TimeIcon />
                    <span className="time-title">Время на этап: 36д 12ч (до 6.12.19)</span>
                  </div>
                </div>
  
                <div className="executor-wrapper">
                  <div className="executor-title">Исполнитель</div>
  
                  <Select style={{ width: 747, height: 48 }} listItemHeight={48} suffixIcon={<SelectSuffixIcon />} defaultValue="default">
                    <Option value="default">Выберите исполнителя</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <button className="executor-btn">Завершить этап</button>
                </div>
  
  
                <Row>
                  <Col span={17}>
                    <div className="comments">
                      <div className="comments-title">
                        Комментарии к задаче
                      </div>
                      {comments.length > 0 && <CommentList comments={comments} />}
                      <Comment
                        avatar={
                          <Avatar
                            src={ <UserAvatar /> }
                            alt=""
                          />
                        }
                        content={
                          <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                          />
                        }
                      />
                    </div>

                    <div className="detail-information">
                      <div className="title">Подробная информация</div>

                      <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} />
                    </div>
                  </Col>
                  <Col span={7} className="steps">
                    <div className="steps-title">Этапы выполнения</div>
                    <Steps direction="vertical" current={0}>
                      <Step title="" description="Назначить сотрудника для проведения внеплановой проверки." />
                      <Step title="" description="Добавить Акт проверки прибора / акт об отказе в допуске" />
                      <Step icon={<StepFinishIcon />} title="" description="Завершение задачи" />
                    </Steps>
                  </Col>
                </Row>
            </Fragment>
        );
    }
}