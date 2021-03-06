import React from 'react'

const Tutorial = () => {
    return (
        <div className='page'>
            <h1>Руководство: Введение в React</h1>
            <h2>Прежде чем мы начнем</h2>
            <h3>Что мы сделаем</h3>
                <p>Сегодня, мы собираемся создать интерактивную игру "крестики-нолики".</p>
                <p>Если хотите, вы можете посмотреть финальный результат здесь: <a
                href="https://codepen.io/gaearon/pen/gWWZgR?editors=0010">Финальный результат</a>.
                Не беспокойтесь если этот код кажется незнакомым или непонятным. Мы будем узнавать как
                создавать эту игру шаг за шагом на протяжении этого руководства.
                </p>
                <p>Попробуйте сыграть в игру. Вы можете кликать на кнопки в списке действий, чтобы
                вернуться назад во времени и видеть как выглядит доска до действия.</p>
                <p>Когда будете играть со знакомым, не стесняйтесь закройте эту вкладку, чтобы начать играть.</p>
            <h3>Необходимые условия</h3>
                <p>Мы будем предполагать некоторое знакомство с HTML и JavaScript, но вы можете
                    пробовать даже если вы не использовали их раньше.</p>
                <p>Если вам нужно освежить JavaScript, мы рекомендуем читать <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">этот гайд</a>.
                    Заметьте, что мы также используем некоторые функции ES6, новейшей версии JavaScript. В этом руководстве, мы
                    используем стрелочные функции, классы, let и const переменные. Вы можете использовать Babel для просмотра как
                    компилируется ES6.</p>
            <h3>Как проходить</h3>
                <p>Там два пути завершить это руководство: вы можете либо писать этот код в браузере, или можете установить
                локальную среду разработки на вашу машину. Вы можете выбрать любой пункт взависимости что вам комфортнее.</p>
            <h4>Если вы предпочитаете писать код в браузере</h4>
                <p>Это самый быстрый путь чтобы начать!</p>
                <p>Первое, откройте <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">стартовый код</a> в новой вкладке.
                Откроется пустое поле для крестиков и ноликов. Мы будем редактировать этот код в течении этого руководства.</p>
                <p>Вы можете сейчас пропустить следующий раздел о настройке локальной среды разработки и перейти к обзору.</p>
            <h4>Если вы предпочитаете писать код в вашем редакторе</h4>
                <p>Альтернативно, вы можете установить проект на ваш компьютер.</p>
                <p>Заметка: <b>это совершенно не обязательный пункт для этого руководства! </b></p>
                <p>Это больше работы, но позволит вам комфортно работать в вашем редакторе.</p>
                <ol>Если вы хотите делать так, здесь есть следующие шаги:</ol>
                <li>1. Удостоверьтесь что у вас установилена новейшая версия Node.js</li>
                <li>2. Следуйте инструкции по созданию нового проекта</li>
                    <img src="img/code1.JPG" alt=""/>
                <li>3. Удалите все файлы в папке <mark>scr/</mark> в новом проекте (не удаляйте саму папку, только контент)</li>
                    <img src="img/code2.JPG" alt=""/>
                <li>4. Добавьте файл с именем <mark>index.css</mark> в папку <mark>scr/</mark> с <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0100">этим CSS кодом</a>.</li>
                <li>5. Добавьте файл с именем <mark>index.js</mark> в папку <mark>scr/</mark> с <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">этим JS кодом</a>.</li>
                <li>6. Добавьте эти строки в самое начало файла <mark>index.js</mark> в папку <mark>scr/</mark>:</li>
                    <img src="img/code3.JPG" alt=""/>
                <p>Теперь если вы запустите <mark>npm start</mark>в папке нашего проекта и откроете <mark>http://localhost:3000</mark> в браузере, вы должны
                увидеть пустю область для крестиков и ноликов.</p>
                <p>Мы рекомендуем следовать <a href="http://babeljs.io/docs/editors">этим инструкциям</a> для конфигурации подцветки синтаксиса в вашем редакторе.</p>
            <h3>Помогите, я застрял!</h3>
                <p>Если вы застряли, загляните в <a href="https://reactjs.org/community/support.html">сообщество поддержки</a>. А конкретно, в <a
                    href="https://reactjs.org/community/support.html#reactiflux-chat">Reactiflux чат</a> это отличный способ получить быструю помощь. Если вы не
                    получите там хороший ответ, пожалуйста отправьте нам заявку, и мы вам поможем.</p>
                <p>Ну что ж, давайте приступим! </p>
        <hr align="center" width="100%" size="2" color="lightgrey"/>
            <h2>Обзор</h2>
            <h3>Почему React?</h3>
                <p>React является декларативной, эффективной и гибкой JavaScript библиотекой для построения юзер-интерфейсов.</p>
                <p>React имеет несколько разных типов компонентов, но мы начнем с подкласса <mark>React.Component</mark>:</p>
                    <img src="img/code4.JPG" alt=""/>
                <p>Мы только что получили до смешного похожие на XML теги. Ваши компоненты говорят React'у что вы хотите отрендерить - тогда React
                будет эффективно обновлять и рендерить компоненты после того когда данные изменяются.</p>
            <p>Здесь у нас список покупок представленный <b>React component class</b> или <b>React component type</b> с названием <mark>ShoppingList</mark>.
                Компонент принимает в параметры,вызываеммые <mark>props</mark>, и возвращает <mark>view</mark> с помощью метода <mark>render</mark>.</p>
            <p>Метод <mark>render</mark> возвращает описание того, что вы хотите отрендерить, и когда React берет это описание он рендерить это на экран.
            В данном случае, <mark>render</mark> возвращает <b>React элемент</b> который являается легковесным описанием того, что нужно отрендерить.
            Большинство React разработчиков используют специальный синтаксис, называемый JSX, который делает легче написание этой структуры.
            Синтаксис <mark>&lt;div /&gt;</mark> во время сборки трансформируется в <mark>React.createElement('div')</mark>. Верхний пример
            эквивалентен следующему:</p>
            <img src="img/code5.JPG" alt=""/>
            <p><a href="See full expanded version.">Смотите полную версию примера.</a></p>
            <p>Если вам любопытно, <mark>createElement()</mark> более делтально описан в <a href="https://reactjs.org/docs/react-api.html#createelement">
                Справочнике API</a>, но мы не хотим использовать это в нашем руководстве. Взамен, мы будем придерживаться использования JSX.</p>
            <p>Вы можете вставить любое JavaScript выражение в скобки внутри JSX. Каждый React элемент это JavaScript объект, который вы можете
            сохранить в переменную или внутри программы.</p>
            <p>Компонент <mark>ShoppingList</mark> только лишь рендерится, но чтобы встроить его в DOM достаточно всего лишь
            написать <mark>&lt;ShoppingList /&gt;</mark>. Каждый компонент инкапсулирован таким образом что позволяет ему работать независимо,
            что позволяет вам строить сложные юзер-интерфейсы из простых компонентов.</p>

            <h3>Стартуем</h3>
            <p>Начните с этого примера: <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">Стартовый код</a></p>
            <p>Он содержит оболочку того, что мы будет сегодня делать. Мы обеспечили стиль таким образом чтобы вы только беспокоились о JavaScript.</p>
            <p>Ближе к делу, мы имеем дерево компонентов:</p>
                <ul>
                    <li>Square</li>
                    <li>Board</li>
                    <li>Game</li>
                </ul>
            <p>Компонент Square рендерит один <mark>&lt;button&gt;</mark>, Board рендерит 9 Square'ов, и компонент Game рендерит
            Board с неким местом для заполнения которое мы будем заполнять позже. Ни один из компонентов на данный момент не является интерактивным.</p>

            <h3>Передача данных через Props(свойства)</h3>
            <p>Давайте попробуем передать некоторые данные из компонента Board в компонент Square/</p>
            <p>В Board компоненте изменим метод renderSquare, передав prop(свойство) <mark>value</mark> в компоненте Square.</p>
            <img src="img/code6.JPG" alt=""/>
            <p>Тогда в Square изменим метод <mark>render</mark> чтобы тот показывал value. Заменим <mark>/ *TODO* /</mark> на <mark>this.props.value</mark>:</p>
            <img src="img/code7.JPG" alt=""/>
            <p>До:</p>
            <img src="img/square1.png" alt=""/>
            <p>После: Вы должны увидеть номера в каждом квадрате.</p>
            <p><a href="https://codepen.io/gaearon/pen/aWWQOG?editors=0010">Взгляните на текущий код.</a></p>
            <img src="img/square2.png" alt=""/>
            <h3>Интерактивный компонент</h3>
            <p>Давайте сделаем чтобы Square компонент заполнялся "X" когда вы кликаете на него. Измените тег button, который возвращает
                функция <mark>render()</mark> таким образом:</p>
            <img src="img/code8.JPG" alt=""/>
            <p>Если вы теперь кликните на квадрат, вы должны получить предупреждение в вашем браузере.</p>
            <p>Тут используется новый синтаксис JavaScript - <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
                стрелочные функции</a>. Заметьте что мы передаем функцию <mark>onClick</mark> как prop. Дейстивие <mark>onClick=&#123;alert('click')&#125;
            </mark> должно немедленно предупреждать когда кнопка нажата.</p>
            <p>React компонент может иметь state(состояние) установленное <mark>this.state</mark> в конструкторе, которое должно рассматриваться как приватное.
            Давайте сохраним текущее value в state Square, и изменим его когда кликнем на Square.</p>
            <p>Первое, добавьте конструктор в класс для инициализации state:</p>
            <img src="img/code9.JPG" alt=""/>
            <p>В <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">JavaScript классах</a>, вам нужно явно вызвать
            метод <mark>super()</mark> когда определяете конструктор подкласса.</p>
            <p>Сейчас измените в Square метод <mark>render</mark> для отображения значения текущего state, и переключения его при клике.</p>
                <ul>
                    <li>Замените <mark>this.props.value</mark> на <mark>this.state.value</mark> внутри тега <mark>&lt;button&gt;</mark>.</li>
                    <li>Замените обработчик события <mark>() => alert()</mark> на <mark>this.setState(&#123;value:'X'&#125;)</mark>.</li>
                </ul>
            <p>Сейчас тег <mark>&lt;button&gt;</mark> выглядит вот так:</p>
            <img src="img/code10.JPG" alt=""/>
            <p>Всякий раз когда <mark>this.setState</mark> вызывается, он планирует обновление компонента, заставляя React соединять переданное обновленное
            состояние и перерендеривает компонент в вместе с его потомками. Когда компонент перерендеривается, <mark>this.state.value</mark> станет <mark>'X'</mark> таким
            образом вы увидете X в сетке.</p>
            <p>Если вы кликнете на любой Square, то в нём должен появиться X.</p>
            <p><a href="https://codepen.io/gaearon/pen/VbbVLg?editors=0010">Взгляните на текущий код.</a></p>

            <h3>Инструменты разработчика</h3>
            <p>Эти React инструменты являются расширениями для Chrome и Firefox, которые позволяют вам изучать дерево React компонентов в браузере.</p>
            <img src="img/tree.png" alt=""/>
            <p>Это позволяет </p>
        </div>
    )
}

export default Tutorial