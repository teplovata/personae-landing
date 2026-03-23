import { Button } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы оцифровать вашу историю?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Начните вести летопись вашей следующей кампании уже сегодня.
          Это бесплатно и просто.
        </p>
        <Button
          type="default"
          size="large"
          icon={<RocketOutlined />}
          className="bg-white text-indigo-600 hover:bg-gray-100"
        >
          Создать свою первую кампанию
        </Button>
      </div>
    </section>
  )
}

export default CTA