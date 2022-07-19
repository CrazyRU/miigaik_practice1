import logo from '../Assets/logo2.png';
import { useTitle } from 'react-use';
import { NavbarBrand } from 'react-bootstrap';
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(10000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

const CowLevel = () => {
  useTitle('Muuuuuu!Muuu!Muuuuuu!');
    return(
      <div class='cow-level-bd'>
        <div class='cow-level-bg'>
          <NavbarBrand href='/'>
            <img class='logocow'
              src={logo}
            />
          </NavbarBrand>
          <div class='text-cow'>
            <h1>Поздравляю, ты нашёл Коровий-уровень! Но теперь лучше беги.</h1>
            <div class='text-cow-little'><h2>Дракончик поможет тебе!</h2></div>
          </div>
          <Demo/>
        </div>
      </div>
    )
  }
  
  export {CowLevel}