import Slider from "../Components/Carousel";
import GridExample from '../Components/Cards';

const Articles = () => {
    return (
        <div class='articles-bd'>
            <div class='article-title'><h3>Свежие обновления!</h3></div>
            <Slider />
            <div class='article-cont'>Полезные статьи</div>
            <GridExample/>
        </div>
    )
}

export {Articles}
