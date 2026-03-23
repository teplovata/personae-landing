import { Card, Row, Col, Image } from 'antd'

const Gallery = () => {
  const examples = [
    {
      title: 'Страница кампании',
      description: 'Общий обзор: последние события, разделение на сессии',
      image: 'https://via.placeholder.com/400x300/E6E6FA/000000?text=Кампания',
    },
    {
      title: 'Страница персонажа',
      description: 'История, связи с другими сущностями',
      image: 'https://via.placeholder.com/400x300/E6E6FA/000000?text=Персонаж',
    },
    {
      title: 'Страница локации',
      description: 'Список событий, связанных с местом',
      image: 'https://via.placeholder.com/400x300/E6E6FA/000000?text=Локация',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Посмотрите, как это может выглядеть</h2>
        <Row gutter={[24, 24]} className="mt-12">
          {examples.map((example, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                hoverable
                cover={
                  <Image
                    src={example.image}
                    alt={example.title}
                    className="h-48 object-cover"
                  />
                }
              >
                <Card.Meta
                  title={example.title}
                  description={example.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Gallery