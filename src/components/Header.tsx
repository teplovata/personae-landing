import { useState } from 'react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'О сервисе', href: '#how-it-works' },
    { label: 'Возможности', href: '#features' },
    { label: 'Примеры', href: '#gallery' },
    { label: 'Планы', href: '#roadmap' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Логотип" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Personae</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button type="link">Войти</Button>
            <Button type="primary">Начать летопись</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <Button type="link" block>
                Войти
              </Button>
              <Button type="primary" block>
                Начать летопись
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header