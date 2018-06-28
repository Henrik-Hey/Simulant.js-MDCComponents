import { Simulant } from '../SimulantDOM';
import { MDCTextField } from '@material/textfield';

export class MDCTextFieldBase extends Simulant.Component {
    constructor(props = {}) {
        super(props);
        this.states={};      
        this.props.input_parent_id=this.props.id+'__parent';
        if(this.props.onkeyup === undefined) this.props.onkeyup = () => {};
        if(this.props.value === undefined) this.props.value = '';
    };

    render() {
        return (
            <div class="mdc-text-field" style={this.props.style} id={this.props.input_parent_id}>
                <input type="text" id={this.props.id} class="mdc-text-field__input" onkeyup={this.props.onkeyup} value={this.props.value}/>
                <label class="mdc-floating-label" for="my-text-field">{this.props.label}</label>
                <div class="mdc-line-ripple"></div>
            </div>
        );
    };

    uponRegistrationFunc() {
        const textField = new MDCTextField(document.getElementById(this.props.input_parent_id));
    };
};