import { MailOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Personae</h3>
            <p className="text-gray-400">
              Цифровая летопись ваших приключений
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">О проекте</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-white">О сервисе</a></li>
              <li><a href="#features" className="hover:text-white">Возможности</a></li>
              <li><a href="#roadmap" className="hover:text-white">Планы развития</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Telegram-чат</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                support@personae.com
              </li>
              <li className="flex items-center gap-2">
                ТГ @gewiahr
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Personae. Сделано энтузиастом для сообщества</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer