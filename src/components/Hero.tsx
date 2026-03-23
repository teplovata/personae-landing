import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import heroImage from '../assets/il1.jpg'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Цифровая летопись ваших приключений
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Создавайте записи кампаний, систематизируйте квесты, персонажей и локации
              вместе с вашей группой.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                Попробовать
              </Button>
              <Button size="large">Посмотреть пример</Button>
            </div>
          </div>

           <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Иллюстрация кампании" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Декоративные элементы вокруг */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-200 rounded-full opacity-50 blur-md"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-50 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero