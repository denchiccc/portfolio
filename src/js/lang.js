const langArr = {
    // ! promo
    'unit': {
        'ua': 'Мене звати Денис Юрченко',
        'ru': 'Меня зовут Денис Юрченко',
        'en': 'My name is Denis Yurchenko',
    },
    'subtitle': {
        'ua': 'Я web-розробник з міста Херсон',
        'ru': 'Я web-разработчик из города Херсон',
        'en': 'I am a web developer from the city of Kherson',
    },

    'about': {
        'ua': 'Про мене',
        'ru': 'Про меня',
        'en': 'About me',
    },
    'about-p': {
        'ua': 'Про мене',
        'ru': 'Про меня',
        'en': 'About me',
    },


    // ! sidepanel
    'sidepanel': {
        'ua': 'Соціальні мережі',
        'ru': 'Социальные сети',
        'en': 'Social network',
    },

    // ! user
    'about-r': {
        'ua': 'Про мене',
        'ru': 'Про меня',
        'en': 'About me',
    },
    'unit-r': {
        'ua': 'Мене звати Денис',
        'ru': 'Меня зовут Денис',
        'en': 'My name is Denis',

    },

    // ! menu
    'portfolio': {
        'ua': 'Портфоліо',
        'ru': 'Портфолио',
        'en': 'Portfolio',

    },
    'experience': {
        'ua': 'Mій досвід',
        'ru': 'Mой опыт',
        'en': 'My experience',

    },
    'my_skills': {
        'ua': 'Мої навички',
        'ru': 'Мои навыки',
        'en': 'My skills',

    },
    'works': {
        'ua': 'Мої роботи',
        'ru': 'Мои работы',
        'en': 'My works',

    },
    'price': {
        'ua': 'Прайс лист',
        'ru': 'Прайс лист',
        'en': 'Price list',

    },


    'сontacts': {
        'ua': 'Контакт',
        'ru': 'Контакты',
        'en': 'Contacts',

    },

    // ! resume
    'anexperience': {
        'ua': 'Досвід',
        'ru': 'Опыт',
        'en': 'An experience',

    },
    'useful': {
        'ua': 'Чим я буду корисний',
        'ru': 'Чем я буду полузен',
        'en': 'How can i be useful',

    },
    'education': {
        'ua': 'Освіта',
        'ru': 'Образование',
        'en': 'Education',

    },
    'work_experience': {
        'ua': 'Досвід работи',
        'ru': 'Опыт работы',
        'en': 'Work experience',

    },

    // ! techno
    'skills': {
        'ua': 'Навички',
        'ru': 'Навыки',
        'en': 'Skills',

    },
    'what_work': {
        'ua': 'Що я використовую у роботі',
        'ru': 'Что я использую в работе',
        'en': 'What do I use at work?',

    },
    'html': {
        'ua': "Саме він створює каркас вашого сайту або програми, а п'ята версія дозволить мені створювати більш SEO – оптимізовану структуру вашого продукту",
        'ru': 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO - оптимизированную структуру вашего продукта',
        'en': 'It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product',

    },
    'css': {
        'ua': "Ця мова стилів дозволяє мені створювати абсолютно будь-який зовнішній вигляд вашого сайту або програми. Все обмежується лише вашою фантазією!",
        'ru': 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
        'en': 'This style language allows me to create absolutely any look for your site or application. Everything is limited only by your imagination!',

    },
    'script': {
        'ua': "Ця мова програмування дозволяє оживити все, що завгодно: слайдери, вікна, підказки, вкладки, отримання даних від сервера та багато іншого",
        'ru': 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
        'en': 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more',

    },
    'jquery': {
        'ua': "Бібліотека Jquery дозволить прискорити розробку. Без необхідності інтегрувати в проект ми її не будемо, але навички роботи з нею присутні",
        'ru': 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует',
        'en': 'The Jquery library will speed up development. Without the need to integrate it into the project, we will not, but the skill of working with it is present',

    },
    'react': {
        'ua': "Ця бібліотека дозволяє створювати веб-додатки. Ми можемо створити максимально інтерактивний продукт саме під ваші цілі",
        'ru': 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели',
        'en': 'This library allows you to create web applications. We can create the most interactive product for your purposes',

    },
    'node': {
        'ua': 'Ця платформа дозволяє створювати бекенд для вашого продукту - "мозки", які виконуватимуть дії, які користувач не бачить',
        'ru': 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
        'en': 'This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see',

    },
    'mongo': {
        'ua': 'Це нереляційна база даних, яка зберігатиме дані вашого сайту або програми',
        'ru': 'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения',
        'en': 'This is a non-relational database that will store your website or application data',

    },
};