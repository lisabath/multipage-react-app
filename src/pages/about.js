import {useState} from 'react';


function About() {
  const initialText = `Tuscola, Neb. – The Nebraska baseball team (6-3) improved to 2-1 on its current season-opening road trip, earning a 5-4 victory over host Tuscola (4-2) on`;
  // const [text, setText] = useState(initialText);

  const person = {
    name: 'Sally',
    age: 21
  }

  const [myList, setMyList] = useState(['Tea','Coffee','Hot chocolate']);
  const [currentPerson, setCurrentPerson] = useState(person);
  const [currentColour, setCurrentColour] = useState('blue');


  function clickHandler(){
    setMyList( [...myList, 'Coca cola'] )
    setCurrentPerson({...currentPerson, name: 'Tamara', age: '44'});
    setCurrentColour('green')
    // setText('something else');
  }

  return (
    <div className="About">

        <h1>The current person is {currentPerson.name}, with the age of {currentPerson.age}</h1>
        

      {/* <h1>The current person is {currentPerson.name}, with the age of {currentPerson.age}</h1> */}
      
      {
        myList.length > 0 ?
        <ul>
          {myList.map((item, index) => <li key={index}>{item}</li>)}
        </ul> 
        :
        ''
      }
      <button onClick={clickHandler}>Change everything</button>
    </div>
  );
}

export default About;