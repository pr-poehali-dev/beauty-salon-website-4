import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-pink-400" size={24} />
              <h1 className="text-2xl font-bold text-gray-800">Элеасть</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                О салоне
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Прайс
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-600 border-pink-200">
            Премиальный салон красоты
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Элеасть
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональный уход за лицом и телом с использованием современных
            аппаратов микротокового лифтинга и виброкомпрессионной терапии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                О салоне
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Элеасть — это современный салон красоты, где каждая процедура
                выполняется с использованием передовых технологий и
                индивидуального подхода к каждому клиенту.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы специализируемся на профессиональном уходе за лицом и телом,
                используя инновационные аппараты для достижения максимального
                эффекта омоложения и оздоровления.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-600"
                >
                  Микротоковый лифтинг
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-600"
                >
                  Эндосфера терапия
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-600"
                >
                  Индивидуальный подход
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/1d425773-b729-4c3d-83e9-44c14e56fa52.jpg"
                alt="Интерьер салона Элеасть"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексный уход с использованием профессиональных аппаратов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-pink-500" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  Микротоковый лифтинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Безболезненная процедура для подтяжки и омоложения кожи лица с
                  помощью слабых электрических импульсов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Waves" className="text-purple-500" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  Эндосфера терапия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Виброкомпрессионное воздействие для улучшения кровообращения,
                  лимфодренажа и борьбы с целлюлитом
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-pink-500" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  Комплексный уход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Индивидуально подобранные процедуры для лица и тела с учетом
                  особенностей вашей кожи
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Прайс-лист
            </h3>
            <p className="text-gray-600">
              Доступные цены на профессиональный уход
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Процедуры для лица
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Микротоковый лифтинг</span>
                  <span className="font-semibold text-gray-800">
                    от 3 500 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Комплексная чистка</span>
                  <span className="font-semibold text-gray-800">
                    от 2 800 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Омолаживающий массаж</span>
                  <span className="font-semibold text-gray-800">
                    от 2 200 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    Курс процедур (5 сеансов)
                  </span>
                  <span className="font-semibold text-pink-600">
                    от 14 000 ₽
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Процедуры для тела
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Эндосфера терапия</span>
                  <span className="font-semibold text-gray-800">
                    от 4 200 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Антицеллюлитный массаж</span>
                  <span className="font-semibold text-gray-800">
                    от 3 500 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Лимфодренаж</span>
                  <span className="font-semibold text-gray-800">
                    от 2 900 ₽
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Комплекс (10 процедур)</span>
                  <span className="font-semibold text-pink-600">
                    от 35 000 ₽
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Контакты</h3>
            <p className="text-gray-600">
              Свяжитесь с нами для записи на процедуры
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Адрес</h4>
                  <p className="text-gray-600">
                    г. Москва, ул. Тверская, д. 15
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Режим работы</h4>
                  <p className="text-gray-600">Пн-Вс: 10:00 - 21:00</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  Записаться онлайн
                </CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Услуга
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option>Выберите услугу</option>
                    <option>Микротоковый лифтинг</option>
                    <option>Эндосфера терапия</option>
                    <option>Комплексный уход</option>
                  </select>
                </div>
                <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Sparkles" className="text-pink-400" size={24} />
            <h4 className="text-xl font-bold">Элеасть</h4>
          </div>
          <p className="text-gray-400">
            Салон красоты премиум-класса • Профессиональный уход • Современные
            технологии
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
