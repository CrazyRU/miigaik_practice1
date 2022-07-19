import error from '../Assets/404.png';

const Stories = () =>{
    return(
      <div class='stories-bd'>
        <h1>Сборник лучших историй и сценариев специально для вас.</h1>
        <p>Вы ведь для этого и здесь, правда?</p>
        <img class='error'
          src={error}
          alt='Error'
        />
      </div>
    )
  }
  
  export {Stories}