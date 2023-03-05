// import logo from './logo.svg';
// import styles from './components/result.module.css'
import Title from './Title.jsx'
import Feed from './Feed.jsx'
import Types from './Types.jsx'
import breakfast from './assets/breakfast.svg'
import lunch from './assets/lunch.svg'
import dinner from './assets/dinner.svg'

console.log(breakfast,lunch,dinner)
function Result() {
  return (
    <>
    <Title></Title>
    <Types diet="Vegan" age="21" goal="Lose Weight" physical="Active" cuisine="Chinese"></Types>
    <Feed title= "Breakfast" link='/_next/static/media/breakfast.2b93a104.svg'></Feed>
    <Feed title= "Lunch" link='/_next/static/media/lunch.176b852f.svg'></Feed>
    <Feed title= "Dinner" link= '/_next/static/media/dinner.5b8bff3b.svg'></Feed>
    </>
  );
}

export default Result;
