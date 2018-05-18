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
                    <div className='code'>
                        <code>npm install -g create-react-app<br/>create-react-app my-app</code>
                    </div>
                <li>3. Удалите все файлы в папке <mark>scr/</mark> в новом проекте (не удаляйте саму папку, только контент)</li>
                    <div className="code">
                        <code>cd my-app<br/>re -f src/ *</code>
                    </div>
                <li>4. Добавьте файл с именем <mark>index.css</mark> в папку <mark>scr/</mark> с <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0100">этим CSS кодом</a>.</li>
                <li>5. Добавьте файл с именем <mark>index.js</mark> в папку <mark>scr/</mark> с <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">этим JS кодом</a>.</li>
                <li>6. Добавьте эти строки в самое начало файла <mark>index.js</mark> в папку <mark>scr/</mark>:</li>
                    <div className="code">
                        <code>
                            import React from 'react';<br/>
                            import ReactDOM from 'react-dom';<br/>
                            import './index.css'
                        </code>
                    </div>
                <p>Теперь если вы запустите <mark>npm start</mark>в папке нашего проекта и откроете <mark>http://localhost:3000</mark> в браузере, вы должны
                увидеть пустю область для крестиков и ноликов.</p>
                <p>Мы рекомендуем следовать <a href="http://babeljs.io/docs/editors">этим инструкциям</a> для конфигурации подцветки синтаксиса в вашем редакторе.</p>

        </div>
    )
}

export default Tutorial