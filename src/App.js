import * as React from 'react';
import Layout from './components/layout/Layout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import ContactData from './containers/checkout/contactData/ContactData';
import Orders from './containers/orders/Orders';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BurgerBuilder />} index />
          <Route path="/checkout" element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>
          <Route path="orders" element={<Orders />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
