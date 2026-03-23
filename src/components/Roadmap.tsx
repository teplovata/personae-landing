import { Tabs, List, Tag, Button, Space, message } from 'antd'
import { CheckCircleOutlined, ClockCircleOutlined, StarOutlined } from '@ant-design/icons'

const Roadmap = () => {
  const currentFeatures = [
    '📜 Летопись событий с хронологической лентой',
    '🔗 Связанные сущности (кликабельная вики)',
    '👥 Совместное редактирование',
    '📂 Разделы: Геро, Квесты, Персонажи, Локации',
    '🔒 Права доступа для ГМа',
    '📱 Адаптивный дизайн',
  ]

  const upcomingFeatures = [
    { name: '🏷️ Теги и фильтрация', status: 'В разработке' },
    { name: '📸 Медиа-галерея', status: 'В разработке' },
    { name: '🌍 Публичные кампании', status: 'Планируется' },
    { name: '✈️ Регистрция через ТГ', status: 'В разработке' },
  ]

  const items = [
    {
      key: '1',
      label: (
        <span>
          <CheckCircleOutlined /> Уже в сервисе
        </span>
      ),
      children: (
        <List
          dataSource={currentFeatures}
          renderItem={(item) => (
            <List.Item>
              <CheckCircleOutlined className="text-green-500 mr-2" />
              {item}
            </List.Item>
          )}
        />
      ),
    },
    {
      key: '2',
      label: (
        <span>
          <ClockCircleOutlined /> В разработке
        </span>
      ),
      children: (
        <div>
          <List
            dataSource={upcomingFeatures}
            renderItem={(item) => (
              <List.Item
              >
                <Tag color="blue">{item.status}</Tag>
                {item.name}
              </List.Item>
            )}
          />
          <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
              <strong>Чего не хватает вам?</strong> Мы делаем сервис для таких же фанатов НРИ.
              Расскажите, какая функция сделала бы ваши кампании еще лучше.
            </p>
            <Button type="primary" className="mt-4">
              Предложить идею
            </Button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Что уже работает — и что мы готовим дальше</h2>
        <p className="section-subtitle">
          Сервисом уже пользуются реальные группы. Мы постоянно его улучшаем,
          ориентируясь на потребности ГМов и игроков.
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultActiveKey="1" items={items} size="large" />
        </div>
      </div>
    </section>
  )
}

export default Roadmap