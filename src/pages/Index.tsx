import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={24} className="text-brand-orange" />
              <span className="text-xl font-bold text-brand-blue">ВоротаПро</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-brand-gray hover:text-brand-orange transition-colors">Услуги</a>
              <a href="#prices" className="text-brand-gray hover:text-brand-orange transition-colors">Цены</a>
              <a href="#installation" className="text-brand-gray hover:text-brand-orange transition-colors">Монтаж</a>
              <a href="#warranty" className="text-brand-gray hover:text-brand-orange transition-colors">Гарантия</a>
              <a href="#about" className="text-brand-gray hover:text-brand-orange transition-colors">О компании</a>
              <a href="#contacts" className="text-brand-gray hover:text-brand-orange transition-colors">Контакты</a>
            </div>
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-brand-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-orange text-white mb-4">Срок изготовления 5-7 дней</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Откатные ворота
                <span className="text-brand-orange block">под ключ</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Производство, доставка и монтаж откатных ворот любой сложности. 
                Гарантия 5 лет на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/4e2022c2-2902-45d9-bdf0-757efeaa88e1.jpg" 
                alt="Откатные ворота" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5-7</div>
                <div className="text-sm">дней</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Наши услуги</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Полный комплекс услуг по изготовлению и установке откатных ворот
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Изготовление</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Производство ворот по индивидуальным размерам из качественных материалов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Бесплатная доставка по городу и области. Аккуратная погрузка и разгрузка
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Settings" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Монтаж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Профессиональная установка с настройкой автоматики и систем безопасности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  5 лет гарантии на конструкцию, 2 года на автоматику и сервисное обслуживание
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Цены на откатные ворота</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Прозрачная стоимость без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Эконом</Badge>
                <CardTitle className="text-2xl text-brand-blue">от 35 000 ₽</CardTitle>
                <CardDescription>Базовая комплектация</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Ворота из профнастила</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Каркас из профильной трубы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Механический замок</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-brand-orange" />
                  <span className="font-semibold">Срок: 5-7 дней</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-brand-orange">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand-orange text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Стандарт</Badge>
                <CardTitle className="text-2xl text-brand-blue">от 55 000 ₽</CardTitle>
                <CardDescription>Оптимальное решение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Сэндвич-панели</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Усиленный каркас</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Автоматика базовая</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Фотоэлементы безопасности</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-brand-orange" />
                  <span className="font-semibold">Срок: 5-7 дней</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Премиум</Badge>
                <CardTitle className="text-2xl text-brand-blue">от 85 000 ₽</CardTitle>
                <CardDescription>Максимальный комфорт</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Алюкобонд или дерево</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Автоматика премиум</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>GSM-модуль</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Встроенная калитка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-brand-orange" />
                  <span className="font-semibold">Срок: 7-10 дней</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Профессиональный монтаж
              </h2>
              <p className="text-xl text-brand-gray mb-8">
                Наша команда выполнит установку ворот с соблюдением всех технологических требований
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Подготовка фундамента</h4>
                    <p className="text-brand-gray">Заливка бетонного основания с закладными элементами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Установка направляющих</h4>
                    <p className="text-brand-gray">Точная разметка и монтаж откатной системы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Настройка автоматики</h4>
                    <p className="text-brand-gray">Подключение и программирование системы управления</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-brand-orange hover:bg-orange-600">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на замер
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/5cad7e76-4574-40e1-86b5-04a27d8f426c.jpg" 
                alt="Монтаж откатных ворот" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Гарантия качества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-4">5 лет</div>
              <h3 className="text-xl font-semibold mb-2">На конструкцию</h3>
              <p className="text-gray-300">Гарантия на металлоконструкцию, сварные швы и покрытие</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-4">2 года</div>
              <h3 className="text-xl font-semibold mb-2">На автоматику</h3>
              <p className="text-gray-300">Полная гарантия на электропривод и систему управления</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Сервис</h3>
              <p className="text-gray-300">Круглосуточная служба поддержки и аварийный ремонт</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Контакты</h2>
            <p className="text-xl text-brand-gray">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-brand-blue mb-2">+7 (495) 123-45-67</p>
                <p className="text-brand-gray">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-brand-blue mb-2">info@vorotapro.ru</p>
                <p className="text-brand-gray">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="mx-auto text-brand-orange mb-4" />
                <CardTitle className="text-brand-blue">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-brand-blue mb-2">г. Москва</p>
                <p className="text-brand-gray">ул. Производственная, 25</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} className="text-brand-orange" />
                <span className="text-xl font-bold">ВоротаПро</span>
              </div>
              <p className="text-gray-300">
                Производство и установка откатных ворот любой сложности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Изготовление ворот</li>
                <li>Монтаж и настройка</li>
                <li>Сервисное обслуживание</li>
                <li>Ремонт автоматики</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О компании</li>
                <li>Наши работы</li>
                <li>Отзывы клиентов</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@vorotapro.ru</p>
                <p>г. Москва, ул. Производственная, 25</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ВоротаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}