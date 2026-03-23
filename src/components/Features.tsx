import { Card, Row, Col } from 'antd'

const Features = () => {
  const features = [
    {
      title: '📜 Летопись (Лента времени)',
      description: 'События сессий в хронологическом порядке.',
    },
    {
      title: '⚔️ Квесты и Задания',
      description: 'Трекер активных и выполненных квестов. Никто не забудет, зачем они пришли в таверну.',
    },
    {
      title: '👥 Персонажи',
      description: 'Профили игроков, ключевые NPC и история взаимодействий.',
    },
    {
      title: '🗺️ Локации',
      description: 'База локаций с привязкой к событиям и другим местам.',
    },
    {
      title: '✏️ Совместное редактирование',
      description: 'Заполнять базу может и ГМ, и игроки.',
    },
    {
      title: '🔍 Скрытая информация',
      description: 'ГМ может скрывать часть заметок для игровок до нужного момента.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Всё в одном месте</h2>
        <Row gutter={[24, 24]} className="mt-12">
          {features.map((feature, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card
                hoverable
                className="h-full"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Features