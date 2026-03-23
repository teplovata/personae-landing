import { Image } from 'antd'
import oldNotebookImg from '../assets/il2.png'

const CaseStudy = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Как мы перестали тонуть в бумажках
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Постоянно играем в НРИ. Раньше у нас были тетради и записи на листах персонажа.
                А когда информации много - все это превращалось в страшное мессиво заметок.
              </p>
              <p className="font-semibold text-indigo-600">
                Теперь это удобный инструмент, которым хотим поделиться с вами.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                  📓
                </div>
                <div>
                  <p className="font-bold">Наша старая тетрадь</p>
                  <p className="text-sm text-gray-500">Заметки, которые терялись и путались</p>
                </div>
              </div>
              <Image.PreviewGroup>
                <Image
                  src={oldNotebookImg}
                  alt="Старая тетрадь"
                  className="rounded-lg"
                />
              </Image.PreviewGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy