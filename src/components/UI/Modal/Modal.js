import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.visibility !== this.props.visibility || nextProps.children !== this.props.children;
    }

    render() {
        let style_vis = {
            transform: 'translateY(0)',
            opacity: '1'
        };
        let style_hid = {
            transform: 'translateY(-100vh)',
            opacity: '0.5'
        };

        return(
            <Aux>
                <Backdrop visibility={this.props.visibility} closeModal={this.props.closeModal}/>
                <div className={classes.Modal} style={this.props.visibility ? style_vis : style_hid}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;
