import Aux from '../../hoc/ReactAux';
import {Component} from "react";

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;