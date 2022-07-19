import error from '../Assets/404.png';

const username = prompt('Пожалуйста, представьтесь?');
if (username) {
  alert(`${username}, добро пожаловать на сайт!`);
} else {
  const username = ('Гость');
  alert(`${username}, добро пожаловать на сайт!`);
}

const Account = () =>{
    return(
      <div class='account-bd'>
        <h1>Ваш аккаунт.</h1>
        <p>Хммм, а где же он?</p>
        <h1>Имя пользователя: {username}</h1>
        <img class='error'
          src={error}
          alt='Error'
        />
      </div>
    )
  }
  
  export {Account}