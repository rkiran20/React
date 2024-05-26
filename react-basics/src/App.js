
import './App.css';
import Button from './components/Button';
import ContactCard from './components/ContactCard';
import Form from './components/Form';
import ImageCards from './components/ImageCards';
import ShoppingCard from './components/ShoppingCard';
import dummyData, { dummyData1 } from './data';

function App() {
  const fruitsArrray = ["apple", "oranges", "grapes"];
  const inStockData = dummyData1.filter((data) =>{
    return (data.inStock === true);
  })
  const soldOutStock = dummyData1.filter((data)=>{
    return (data.inStock === false)
  })
  //console.log(inStockData);

  return (
    <div className="App">
      <h2>i am written in jsx</h2>
      <p>The total number of items in fruitsArrray are {fruitsArrray.length} </p>
      <div>we will build an inline search form</div>
      < Form />
      <div className='cardDiv'>
        <ContactCard  name="Ravi Kiran" job="Electrical Engineer" email="ravikiran20@iitk.ac.in"  />
        <ContactCard  name="Rohit Sharma" job="Cricketer" email="rohitSharma264@indiancaptain.com"  />
        <ContactCard  name="Bumrah" job="Cricketer" email="bumrah@cricketer.com"  />
      </div>
      <div className='btnDiv'>
        <Button btnText="cancel" btnColor="red" btnBorderColor="red" />
        <Button btnText="confirm" btnColor="green" btnBorderColor="green" />
      </div>
      <div className='imgDiv'>
        {dummyData.map((contact)=>(
          <ImageCards imageLink={contact.imgLink} altImage={contact.altImg} />
        ))}
      </div>
      <div>
      <h1 style={{textAlign: 'center', marginBottom: 10}}>Shopping Cart</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: 10,   }}>
            <ul>Image</ul>
            <ul>Title</ul>
            <ul>Price</ul>
        </div>
        {inStockData.map((item,index)=>(
          <ShoppingCard key={index} imageSrc={item.imageSrc} title={item.title} price={item.price} inStock="true" />
        ))}
      </div>
      <Button btnText="Continue checkout" btnColor="grey" btnBorderColor="black" />
      <div>
      <h1 style={{textAlign: 'center', marginBottom: 10}}>Sold out</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: 10,   }}>
            <ul>Image</ul>
            <ul>Title</ul>
            <ul>Price</ul>
        </div>
        {soldOutStock.map((item,index)=>(
          <ShoppingCard key={index} imageSrc={item.imageSrc} title={item.title} price={item.price} inStock="true" />
        ))}
      </div>
    </div>
  );
}

export default App;
