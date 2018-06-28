import { Simulant } from "../SimulantDOM";
import {MDCRipple} from '@material/ripple';

export class MDCAccordion extends Simulant.Component {
    constructor(props = {}) {
        super(props);
        this.states = { 
            isOpen   : false,
        };
        if(this.props.isOpen !== undefined) this.states.isOpen = this.props.isOpen;
    };

    render() {
        return (
            <div class={"accordion " + (this.states.isOpen ? 'active' : '')}>   
                <div class="accordion-toggle">
                    <li class={"mdc-list-item " + (this.props.isActive ? "mdc-list-item--activated" : "")} 
                        onClick={
                            () => {
                                this.setState({ isOpen : !this.states.isOpen });
                                this.props.onClick();
                            }                                          
                        }>
                        <span class="mdc-list-item__text">
                            { this.props.title }
                        </span>
                        <span class={"mdc-list-item__meta material-icons " + (this.states.isOpen ? 'open' : '')} aria-hidden="true">
                            keyboard_arrow_down
                        </span>
                    </li>
                </div>
                <div class="accordion-content">
                    { this.props.children }
                </div>
            </div>
        );
    };

    uponRegistrationFunc() {};
};