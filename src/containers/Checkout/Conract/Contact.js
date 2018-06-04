import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

import Style from './Contact.css';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: ''
    }
  };

  render() {
    return(
      <div className={Style.Contact}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={Style.Input} type="text" name="name" placeholder="Your Name"/>
          <input className={Style.Input} type="email" name="email" placeholder="Your Email"/>
          <input className={Style.Input} type="text" name="street" placeholder="Your Address"/>
          <input className={Style.Input} type="text" name="city" placeholder="Your City"/>
          <input className={Style.Input} type="text" name="state" placeholder="Your State"/>
          <input className={Style.Input} type="text" name="zip" placeholder="Your Zip Code"/>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default Contact;