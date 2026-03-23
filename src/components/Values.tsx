import { Card, Row, Col } from 'antd'
import { LockOutlined, HistoryOutlined, TeamOutlined } from '@ant-design/icons'

const Values = () => {
  const values = [
    {
      icon: <LockOutlined className="text-4xl text-indigo-600" />,
      title: 'Больше никаких спойлеров',
      description: 'ГМ может скрывать определенные заметки до нужного момента.',
    },
    {
      icon: <HistoryOutlined className="text-4xl text-indigo-600" />,
      title: 'История на пальцах',
      description: 'Легко найти предысторию персонажа или причину конфликта с фракцией, даже если это было 10 сессий назад.',
    },
    {
      icon: <TeamOutlined className="text-4xl text-indigo-600" />,
      title: 'Вовлеченность',
      description: 'Игроки могут дополнять записи о своих персонажах, разгружая мастера.',
    },
  ]

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container-custom">
        <h2 className="section-title">Идеально для групп, которые хотят большего</h2>
        <Row gutter={[24, 24]} className="mt-12">
          {values.map((value, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="text-center h-full" bordered={false}>
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Values