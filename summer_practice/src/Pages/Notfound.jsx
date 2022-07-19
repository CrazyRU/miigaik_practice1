import { Link } from "react-router-dom";

const NotFound = () => {
    return(
      <div class='notfound-bd'>
        <h1>Мне кажется ты потерялся.</h1>
        <div>Или ты думал, что так просто найдёшь ~ТОТСАМЫЙ~ уровень?!</div>
        <div>В любом случае старайся искать его сам, а не через код. Подсказок предостаточно.</div>
        <div>И поспеши уже скорее на главную страницу <Link to="/">Home</Link>. Удачи!</div>
      </div>
    )
  }
  
  export {NotFound}