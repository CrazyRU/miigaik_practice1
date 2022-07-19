const Home = () =>{
  return(
    <div class='home-bd'>
      <div class="home-bg">
        <div class="home-bg-text">
            <a href='#about'>Приветствуем вас на D20Stories!</a>
        </div>
      </div>
      <div id="about">
        <div class="title">
          О нашем сайте
        </div>
        <div class="about-text">
            D20Stories - это удобный сайт для поиска готовых НРИ сюжетов и идей для ваших приключений.
        </div>
        <div class="about-text bigger">
            А в чём собственно фишка?
        </div>
        <ol>
            <li>Огромная библиотека сюжетов</li>
            <li>Поиска сценариев по базовым тегам</li>
            <li>Возможность выкладывать собственные истории</li>
            <li>Фильтр русскоязычных и англоязычных тестов</li>
            <li>Поддержка различных систем НРИ</li>
        </ol>
      </div>
    </div>
  )
}

export {Home}