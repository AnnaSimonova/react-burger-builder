import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true,
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Anna',
                adress: {
                    street: 'Street1',
                    zipCode: '01025',
                    country: 'Ukraine'
                },
                email: 'email'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('orders.json', order)
            .then(request=> {
                console.log(order);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
            });
    };

    render() {
        let form =
            (<form>
                <input type='text' name='name' placeholder='Your name' className={classes.Input}/>
                <input type='email' name='email' placeholder='Your email'  className={classes.Input}/>
                <input type='text' name='street' placeholder='Street name'  className={classes.Input}/>
                <input type='text' name='postal' placeholder='Postal code'  className={classes.Input}/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>);

        if (this.state.loading) {
            form = <Spinner/>;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
