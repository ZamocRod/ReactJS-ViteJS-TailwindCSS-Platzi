import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';

function Home() {
  const APIUrl = 'https://api.escuelajs.co/api/v1/products';
  const [items, setItems] = React.useState(null);

  React.useEffect(()=>{
    fetch(APIUrl)
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  },[]);
  return (
    <Layout>
      Home
      <div className='grid gap-8 grid-cols-5 w_full'>
        {
          items?.map(item=>(<Card key = {item.id} data = {item}/>))
        }
      </div>
      <ProductDetail></ProductDetail>
      <CheckOutSideMenu></CheckOutSideMenu>
    </Layout>
  )
}

export default Home