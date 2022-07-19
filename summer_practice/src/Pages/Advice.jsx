import error from '../Assets/404.png';

const Advice = () =>{
  return(
    <div class='stories-bd'>
      <h1>Здесь будет располагаться статья.</h1>
      <img class='error'
          src={error}
          alt='Error'
        />
    </div>
  )
}

export {Advice}