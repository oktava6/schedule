!function(e){function t(r){if(a[r])return a[r].exports;var s=a[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=a(1),c=r(s),i=a(4),o=r(i);a(5),(0,c.default)(),(0,o.default)()},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),c=r(s),i=a(3),o=function(){var e=document.querySelectorAll(".schedule-event")||[],t=new Date;[].forEach.call(e,function(e){var a=(0,i.findElem)(c.default,"alias",e.dataset.alias);a&&+new Date(a.date)<+t-72e5&&e.classList.add("schedule-event_past")})};t.default=o},function(e,t){e.exports=[{alias:"1",schools:["shri","design"],topic:"Адаптивная вёрстка",lecturer:"basvasilich",date:"2017-03-20T19:30+03:00",place:"Синий Кит",review:"О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."},{alias:"2",schools:["shri","mobdev","design"],topic:"Работа с сенсорным пользовательским вводом",lecturer:"d-dushkin",date:"2017-03-21T19:30+03:00",place:"Королевский пингвин",review:"Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."},{alias:"3",schools:["shri"],topic:"Мультимедиа: возможности браузера",lecturer:"maxatwork",date:"2017-03-22T20:15+03:00",place:"Подлый ленивец",review:"О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."},{alias:"4",schools:["shri","mobdev"],topic:"Нативные приложения на веб-технологиях",lecturer:"veged",date:"2017-03-23T20:00+03:00",place:"Рыжий лис",review:"Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."},{alias:"5",schools:["shri"],topic:"Клиентская оптимизация: базовые знания и лучшие практики",lecturer:"alt-j",date:"2017-03-24T19:30+03:00",place:"Большая и толстая коала",review:"Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."},{alias:"6",schools:["shri","mobdev","design"],topic:"Клиентская оптимизация: мобильные устройства и инструменты",lecturer:"veged",date:"2017-03-25T20:00+03:00",place:"Рыжий лис",review:"Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."},{alias:"7",schools:["shri","mobdev","design"],topic:"Инфраструктура веб-проектов",lecturer:"andre487",date:"2017-03-26T19:00+03:00",place:"Синий Кит",review:"Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."},{alias:"8",schools:["shri"],topic:"Инструменты разработки мобильного фронтенда",lecturer:"andre487",date:"2017-03-27T19:30+03:00",place:"Королевский пингвин",review:"Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды."},{alias:"9",schools:["shri","design"],topic:"Адаптивная вёрстка",lecturer:"basvasilich",date:"2017-03-28T19:30+03:00",place:"Синий Кит",review:"О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."},{alias:"10",schools:["shri","mobdev","design"],topic:"Работа с сенсорным пользовательским вводом",lecturer:"d-dushkin",date:"2017-03-29T20:15+03:00",place:"Королевский пингвин",review:"Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."},{alias:"11",schools:["shri"],topic:"Мультимедиа: возможности браузера",lecturer:"maxatwork",date:"2017-03-30T22:00+03:00",place:"Подлый ленивец",review:"О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."},{alias:"12",schools:["shri","mobdev"],topic:"Нативные приложения на веб-технологиях",lecturer:"veged",date:"2017-04-01T19:30+03:00",place:"Рыжий лис",review:"Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."},{alias:"13",schools:["shri"],topic:"Клиентская оптимизация: базовые знания и лучшие практики",lecturer:"alt-j",date:"2017-04-02T20:00+03:00",place:"Большая и толстая коала",review:"Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."},{alias:"14",schools:["shri"],topic:"Клиентская оптимизация: мобильные устройства и инструменты",lecturer:"veged",date:"2017-04-03T19:30+03:00",place:"Рыжий лис",review:"Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."},{alias:"15",schools:["shri","mobdev","design"],topic:"Инфраструктура веб-проектов",lecturer:"andre487",date:"2017-04-04T20:15+03:00",place:"Синий Кит",review:"Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."},{alias:"16",schools:["shri"],topic:"Инструменты разработки мобильного фронтенда",lecturer:"andre487",date:"2017-04-05T19:30+03:00",place:"Королевский пингвин",review:"Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды."},{alias:"17",schools:["shri","design"],topic:"Адаптивная вёрстка",lecturer:"basvasilich",date:"2017-04-06T19:30+03:00",place:"Синий Кит",review:"О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки."},{alias:"18",schools:["shri","mobdev","design"],topic:"Работа с сенсорным пользовательским вводом",lecturer:"d-dushkin",date:"2017-04-07T20:00+03:00",place:"Королевский пингвин",review:"Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню."},{alias:"19",schools:["shri"],topic:"Мультимедиа: возможности браузера",lecturer:"maxatwork",date:"2017-04-08T19:30+03:00",place:"Подлый ленивец",review:"О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API."},{alias:"20",schools:["shri","mobdev"],topic:"Нативные приложения на веб-технологиях",lecturer:"veged",date:"2017-04-09T20:15+03:00",place:"Рыжий лис",review:"Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap."},{alias:"21",schools:["shri"],topic:"Клиентская оптимизация: базовые знания и лучшие практики",lecturer:"alt-j",date:"2017-04-10T20:15+03:00",place:"Большая и толстая коала",review:"Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений."},{alias:"22",schools:["shri"],topic:"Клиентская оптимизация: мобильные устройства и инструменты",lecturer:"veged",date:"2017-04-11T19:30+03:00",place:"Рыжий лис",review:"Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации."},{alias:"23",schools:["shri","mobdev","design"],topic:"Инфраструктура веб-проектов",lecturer:"andre487",date:"2017-04-12T20:15+03:00",place:"Синий Кит",review:"Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта."}]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];t.getMonth=function(e){return a[e]},t.findElem=function(e,t,a){for(var r=0;r<e.length;r++)if(e[r][t]===a)return e[r]}},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.querySelector(".filter__lecturer").addEventListener("change",function(e){return u("lecturer",e.target.value)}),document.querySelector(".filter__school").addEventListener("change",function(e){return u("school",e.target.value)})};var s=a(2),c=r(s),i=a(3),o=document.querySelector(".filter__message"),l=document.querySelector(".schedule").children,n={lecturer:function(e,t){return e.lecturer===t},school:function(e,t){return e.schools.indexOf(t)!==-1}},d={},u=function(e,t){var a=new Array(l.length+1).join("0").split("").map(parseFloat);"all"===t?delete d[e]:d[e]=t,Object.keys(d).forEach(function(e){a.forEach(function(t,r){if(!t){var s=(0,i.findElem)(c.default,"alias",l[r].dataset.alias);n[e](s,d[e])||(a[r]=1)}})}),a.forEach(function(e,t){return e?l[t].classList.add("schedule-event_hidden"):l[t].classList.remove("schedule-event_hidden")}),a.indexOf(0)===-1?o.classList.remove("schedule-event_hidden"):o.classList.add("schedule-event_hidden")}},function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=a(6),c=r(s),i=document.querySelector(".lecturer__image"),o=document.querySelector(".lecturer__text"),l=document.querySelector(".lecturer"),n=document.querySelector("html"),d=0,u=function(e){e.preventDefault();var t=c.default[e.target.pathname.split(/[\/ ]+/).pop()];d=document.body.scrollTop,document.body.classList.add("overlay"),n.classList.add("overlay"),l.classList.add("lecturer_active"),i.src=t.image,o.innerHTML=t.about},v=function(e){e.preventDefault(),e.target.parentNode.querySelector(".schedule-event__review").classList.add("schedule-event__review_active")};document.querySelector(".lecturer__cross").addEventListener("click",function(){n.classList.remove("overlay"),document.body.classList.remove("overlay"),document.body.scrollTop=d,i.parentNode.classList.remove("lecturer_active")}),document.querySelector(".schedule").addEventListener("click",function(e){var t=e.target.classList;t.contains("schedule-event__lecturer")?u(e):t.contains("schedule-event__topic")?v(e):t.contains("schedule-event__review-cross")&&e.target.parentNode.classList.remove("schedule-event__review_active")})},function(e,t){e.exports={basvasilich:{name:"Вадим Пацев",about:"Руководитель отдела разработки интерфейсов. В Яндексе с 2008 года. Был в роли дизайнера и разработчика интерфейсов. Интересуется быстрым прототипированием и визуальными возможностями современных веб технологий.",image:"https://avatars.mds.yandex.net/get-yaevents/198307/86248e34b6d511e687ef002590c62a5c/big"},"d-dushkin":{name:"Дмитрий Душкин",about:"Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.",image:"https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big"},veged:{name:"Сергей Бережной",about:"Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.",image:"https://avatars.mds.yandex.net/get-yaevents/194464/2e89984ab6d511e687ef002590c62a5c/big"},"alt-j":{name:"Андрей Морозов",about:"Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.",image:"https://avatars.mds.yandex.net/get-yaevents/204268/478d8b92b6dc11e687ef002590c62a5c/big"},andre487:{name:"Прокопюк Андрей",about:"В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.",image:"https://avatars.mds.yandex.net/get-yaevents/197753/08c0df918516725d5f8ac452fb8bf610/big"},maxatwork:{name:"Максим Васильев",about:"Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.",image:"https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big"}}}]);