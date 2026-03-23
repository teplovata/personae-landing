import { Steps } from 'antd'

const HowItWorks = () => {
  const items = [
    {
      title: 'Создайте кампанию',
      description: 'ГМ создает новую кампанию.',
    },
    {
      title: 'Пригласите игроков',
      description: 'Отправьте приглашения вашей группе. Каждый получит доступ к общему кампейну.',
    },
    {
      title: 'Ведите летопись',
      description: 'Записывайте события, создавайте персонажей, отмечайте квесты и локации.',
    },
    {
      title: 'Создавайте связи',
      description: 'Любая сущность становится ссылкой. Кликайте и исследуйте взаимосвязи вашего мира.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Создайте живую летопись вашей кампании</h2>
        <p className="section-subtitle">
          Каждая запись — это точка на карте истории. Нажимайте на имена, места и задания,
          чтобы увидеть всю сеть взаимосвязей вашего мира.
        </p>
        <div className="mt-12">
          <Steps
            direction="vertical"
            items={items}
            className="max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks