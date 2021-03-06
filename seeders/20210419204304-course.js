'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let categories = [
            {
                tag: 'CSS',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/css.png'

            }, {
                tag: 'HTML',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/html.png'
            }, {
                tag: 'JS',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/javascript.png'
            }, {
                tag: 'REACT',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/reactjs.jpg'
            }, {
                tag: 'VUE',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/vue.jpg'
            }, {
                tag: 'PYTHON',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/python.png'
            }, {
                tag: 'C++',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/c-sharp-c.png'
            }, {
                tag: 'JAVA',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/java.png'
            }, {
                tag: 'RUBY',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/ruby.png'
            }, {
                tag: 'PHP',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: 'https://cdn.coursehunter.net/category/php.png'
            },
        ]
        let courses = [
            {
                coursename: 'JavaScript Стартовый',
                description: 'JavaScript – это самый популярный язык программирования, без знания которого не обойтись в web-разработке и который можно использовать для решения иных задач. Сегодня JavaScript, кроме добавления динамического поведения HTML страницам, применяется в разработке серверных приложений, игровых и мобильных приложений, а также для создания сценариев для автоматизации тестирования и многого другого. Изучение JavaScript — это хорошее вложение в будущее, так как язык пригодится для решения разных задач и будет полезным как Frontend или Backend разработчику, так и тестировщику программного обеспечения.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'Udemy',
                imagesource: 'https://cdn.coursehunter.net/course/javascript-startovyy.jpg'
            },
            {
                coursename: 'Full-Stack разработка приложений с Java Spring и Angular',
                description: 'В данном курсе мы с Вами будем создавать веб приложение с использованием Java Spring и Angular. Мы получим все навыки чтобы создавать свои собственные приложения используя один из самый популярных стек технологий.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS', 'HTML', 'CSS'],
                source: 'Udemy',
                imagesource: 'https://cdn.coursehunter.net/course/full-stack-razrabotka-prilozheniy-s-java-spring-i-angular.jpg'
            }, {
                coursename: 'Full Web Apps with FastAPI',
                description: 'FastAPI has burst on to the Python web scene. In fact, the 2020 PSF developer survey shows FastAPI going from off the radar to the 3rd most popular and fastest growing framework for Python developers. People discovering FastAPI are thrilled with it\'s toolchain for building APIs. But they wonder if they will need to build a parallel app in Flask or Django for the HTML side of their site.\n',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['PYTHON'],
                source: 'FrontendMasters',
                imagesource: 'https://cdn.coursehunter.net/course/veb-prilozheniya-s-fastapi.jpg'
            }, {
                coursename: 'Обработка и анализ данных на Python',
                description: 'Представляем Вашему вниманию курс по изучению Обработки и анализу данных на Python. Курс состоит из 4-х частей и включает в себя 48 уроков общей продолжительностью более 15 часа видео.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['PYTHON'],
                source: 'Udemy',
                imagesource: 'https://cdn.coursehunter.net/course/obrabotka-i-analiz-dannyh-na-python.jpg'
            }, {
                coursename: 'Python. Полное руководство',
                description: 'Python – это невероятно популярный, востребованный, современный, мощный скриптовой язык программирования, который предлагает низкий порог вхождения для начинающих его изучение. Отличительной чертой Python является простой в использовании синтаксис, что делает этот высокоуровневый язык программирования идеальным как для новичков, так и для тех, кто хочет сменить направление в IT.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['PYTHON'],
                source: 'FrontendMasters',
                imagesource: 'https://cdn.coursehunter.net/course/python-polnoe-rukovodstvo.jpg'
            }, {
                coursename: 'Django. Полное руководство',
                description: 'Пройдите весь процесс создания сайта на Django: от установки и настройки окружения до создания проекта локально и его деплоя на хостинг.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['PYTHON'],
                source: 'FrontendMasters',
                imagesource: 'https://cdn.coursehunter.net/course/django-polnoe-rukovodstvo.jpg'
            }, {
                coursename: 'MERN stack complete',
                description: 'Welcome to "MERN stack complete". This course will introduce you to the easiest way to build complete web applications using just the fundamental languages of the web: JavaScript, HTML and CSS. We will build a complete web app using the JavaScript frameworks of the MERN Stack: MongoDB, ExpressJS, React and NodeJS. This course will teach you all the important basics of web applications including: User accounts, security, cookies',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['PYTHON'],
                source: 'SoftwareTesting',
                imagesource: 'https://cdn.coursehunter.net/course/polnocennyy-mern-stack-fulstak-prilozheniya-s-nulya.jpg'
            }, {
                coursename: 'NodeJs: Build The Complete E-Commerce Web API',
                description: 'Node.js, or Node, is a runtime environment for executing JavaScript code outside of a browser. It is ideal for building highly-scalable, data-intensive backend services (APIs) that power your client’s apps (web or mobile apps).',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'SoftwareTesting',
                imagesource: 'https://cdn.coursehunter.net/course/nodejs-sozdanie-polnocennogo-veb-api-elektronnoy-kommercii.jpg'
            }, {
                coursename: 'Advanced Typescript programming with NodeJs and Webpack',
                description: 'Welcome to my course, in which you will learn Typescript and NodeJs by practice. We will not waste much time on presentations or reading the documentation, which you can do yourself, no course needed. Instead we will focus on coding a real, full stack application.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'SoftwareTesting'
            }, {
                coursename: 'Design Patterns in TypeScript',
                description: 'In programming, there are several problems that occur frequently. To solve these problems, there are various repeatable solutions; these are known as design patterns. Design patterns are a great way to improve the efficiency of your programs and improve your productivity; you\'ll learn them all in this course. This course is a collection of the most important patterns you need to improve application performance and productivity.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'SoftwareTesting',
                imagesource: 'https://cdn.coursehunter.net/course/rasshirennoe-programmirovanie-na-typescript-s-pomoshchyu-nodejs-i-webpack.jpg'
            }, {
                coursename: 'Master Class: React + Typescript 2021 Web Development',
                description: 'Many new React Developers find ReactJS easy to learn and that is totally true. But the problem is when they are coding complex structures, the code becomes unmaintainable and ends up having spaghetti code. Some developers as well do not know all the functionalities that React offers and they end up coding like they are using Vanilla JS instead of doing everything the React Way. Bad way of coding always produce bugs and worst, an unfixable one.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['REACT', 'JS'],
                source: 'ITVDN',
                imagesource: 'https://cdn.coursehunter.net/course/master-klass-react-typescript-2021-veb-razrabotka.jpg'

            }, {
                coursename: 'Vue 3 Essentials with Typescript: A Practical Guide',
                description: 'I\'m a FullStack Developer with 10+ years of experience. I\'m obsessed with clean code and I try my best that my courses have the cleanest code possible. My teaching style is very straightforward, I will not waste too much time explaining all the ways you can create something or other unnecessary information to increase the length of my lectures. If you want to learn things rapidly then this course is for you.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'ITVDN',
                imagesource: 'https://cdn.coursehunter.net/course/osnovy-vue-3-s-typescript.jpg'
            }, {
                coursename: 'Java с нуля до Junior + Подготовка к собеседованию',
                description: 'Этот курс предназначен как для людей, которые никогда не изучали языки программирования, так и для тех, кто уже знает язык Java и хочет углубить свои знания и подготовиться к собеседованию на должность Junior разработчика.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JAVA'],
                source: 'ITVDN',
                imagesource: 'https://cdn.coursehunter.net/course/java-s-nulya-do-junior-podgotovka-k-sobesedovaniyu.jpg'
            }, {
                coursename: 'Введение в объектно-ориентированный дизайн с Java',
                description: 'Этот курс ориентирован на тех, кто уже знаком с языком программирования Java и хотел бы углубить свои знания и изучить объектно-ориентированный анализ и проектирование программного обеспечения. На этом курсе Вы познакомитесь с основными принципами и паттернами объектно-ориентированного дизайна, используемыми при разработке программных систем Java.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JAVA'],
                source: 'ITVDN',
                imagesource: 'https://cdn.coursehunter.net/course/vvedenie-v-obektno-orientirovannyy-dizayn-s-java.jpg'
            }, {
                coursename: 'Java (Джава) для начинающих: с нуля до сертификата Oracle',
                description: 'Вы научитесь писать различные программы на Java и будете полностью готовы к сдачи теста на Сертификат OCA от Oracle. Он подтверждает Вашу квалификацию в Java. Это значит, что Вы сможете работать как у себя дома, так и в США, Канаде. Средняя з/п Java специалиста в СНГ 120.000 рублей и 4000-6000 $ в Израиле и Америке.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JAVA'],
                source: 'Bruno Simon',
                imagesource: 'https://cdn.coursehunter.net/course/java-dzhava-dlya-nachinayushchih-s-nulya-do-sertifikata-oracle.jpg'
            }, {
                coursename: 'Полный курс по JavaScript + React',
                description: 'Освой самый популярный язык программирования - JavaScript и научись применять его на практике! Этот курс направлен на подробное изучение JavaScript без воды, но главное - немедленноеприменение его на практике. Это значит, что вы получите материал для работы и мы вместе будем создавать реальные проекты шаг за шагом.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS', 'REACT'],
                source: 'Bruno Simon',
                imagesource: 'https://cdn.coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata.jpg'
            }, {
                coursename: 'Functional JavaScript First Steps',
                description: 'You may have found yourself hearing more and more about this trendy topic of \'functional programming\', from a bunch of excited coders enthusiastically gushing about how it helps them write elegant, modular code that\'s easier to test, debug, and reason about. If you\'re like me, you may have started asking questions like, "What is functional programming anyway, and why are people so excited about it?" "What does functional code look like? How is it different from imperative or OO code?" and "What tools do I need to write functional programs? Do I have to learn Haskell? (spoiler alert: no!)"',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'Bruno Simon',
                imagesource: 'https://cdn.coursehunter.net/course/funkcionalnyy-javascript-pervye-shagi.jpg'
            }, {
                coursename: 'HolyJS 2020 Moscow',
                description: 'Конференция для JavaScript-разработчиков. 25-28 ноября, онлайн. 4 дня и несколько десятков технических докладов.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'ITVDN',
                imagesource: 'https://cdn.coursehunter.net/course/holyjs-2020-moscow-konferenciya-dlya-javascript-razrabotchikov.jpg'
            }, {
                coursename: 'Getting Started with JavaScript, v2',
                description: 'Want to learn to code using JavaScript? This is a great place to start! In this course, you’ll start out with a tour of the basic building blocks programming like variables, loops, functions and operations. Then, you’ll go through the three main pillars of JavaScript: Types and Coercion for comparing values and converting between types, Scope and Closure for knowing where variables can be accessed, and JavaScript’s “this” and Prototype system for dynamic context.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'Bruno Simon',
                imagesource: 'https://cdn.coursehunter.net/course/nachalo-raboty-s-javascript-v2.jpg'
            }, {
                coursename: 'Profit with JavaScript',
                description: 'Profit with JavaScript is Clever Programmer\'s brand new course.  Like what the name suggests, the course is focused on teaching you how to earn using the programming language JavaScript.  The course consists of 15 modules that focuses on different parts of JavaScript applications. This includes JavaScript OOP, a JavaScript crash course, a Twitter-like app, and a Google Maps-like project, and so much more!',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'Udemy',
                imagesource: 'https://cdn.coursehunter.net/course/profit-vmeste-s-javascript.jpg'
            }, {
                coursename: 'Build Telegram Bots with JavaScript: The Complete Guide',
                description: 'Telegram is a cloud-based instant messaging app that provides API to developers to create bots that interact with users. This course aims to provide you with complete set of knowledge on how to build amazing Telegram Bots.',
                createdAt: new Date(),
                updatedAt: new Date(),
                tags: ['JS'],
                source: 'Udemy',
                imagesource: 'https://cdn.coursehunter.net/course/sozdanie-telegram-botov-s-pomoshchyu-javascript-polnoe-rukovodstvo.jpg'
            }]
        let sources = [
            {
                name: 'Udemy',
                description: 'By connecting students all over the world to the best instructors, Udemy is helping individuals reach their goals and pursue their dreams. Udemy is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed. Udemy helps organizations of all kinds prepare for the ever-evolving future of work. Our curated collection of top-rated business and technical courses gives companies, governments, and nonprofits the power to develop in-house expertise and satisfy employees’ hunger for learning and development.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'FrontendMasters',
                description: 'FrontendMasters - One of the best places to learn Frontend. Video courses are taught by leading people in the industry.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'SoftwareTesting',
                description: 'The Software-Testing.RU project is dedicated to testing and improving the quality of software. On our portal, testers can find hundreds of thematic articles, a selection of books on testing, an overview of industry news. The Trainings section contains information about training courses, trainings, conferences and other testing events held in Russia and the CIS by various companies. ',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'ITVDN',
                description: 'An educational online resource for IT professionals, created in 2014 in Ukraine. The goal of the project is to teach programming languages ​​and information technology to everyone who wants to become a professional in the field of software development, design of complex software systems, web development and related fields.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Bruno Simon',
                description: 'At first, I wanted to make something original, entertaining, playable and understandable. As I’ve been using WebGL a lot last years and as a huge gamer, going for a game concept was an obvious choice. Since I was a kid, I’ve always liked playing with remote controlled cars and I’ve spent lots of time playing Micro Machine on Playstation. So as a result, I decided to build a universe where you could drive around with a remote car',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]

        await queryInterface.bulkInsert('Categories', categories);
        await queryInterface.bulkInsert('Sources', sources)

        const [categoryRows] = await queryInterface.sequelize.query(
            `SELECT id, tag from Categories;`
        );

        const [sourcesRows] = await queryInterface.sequelize.query(
            `SELECT id, name from Sources;`
        );

        await queryInterface.bulkInsert('Courses', courses.map(({tags, source, ...rest}) => {
            const currentSource = sourcesRows.find(({name})=> name === source)
            return {
                ...rest,
                SourceId: currentSource.id
            }
        }));

        const [coursesRows] = await queryInterface.sequelize.query(
            `SELECT id, coursename from Courses;`
        );

        return await Promise.all(
            courses.map(async ({tags, source, coursename}) => {
                const courseId = coursesRows.find(({coursename: name}) => coursename === name).id;
                const tagsId = categoryRows.reduce((acc, {
                    tag,
                    id
                }) => tags.some(el => el === tag) ? [...acc, id] : acc, [])
                return await Promise.all(tagsId.map(el => queryInterface.bulkInsert('CategoryAssociation', [{
                    CategoryId: el, CourseId: courseId, createdAt: new Date(),
                    updatedAt: new Date()
                }])))
            }))
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Courses', null, {});
    }
};
