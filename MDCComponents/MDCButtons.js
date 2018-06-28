import { Simulant } from '../SimulantDOM';

export function MDCButtonRaised(props) {
    if(props.isDisabled === undefined) props.isDisabled = false;
    return (
        <button 
            style={props.style}
            disabled={props.isDisabled}
            class="mdc-button mdc-elevation-z2" 
            onclick={props.onClick}>
            {props.title}
        </button>
    );
};

export function MDCFAB(props) {
    return (
        <button 
            id={props.id}
            class="mdc-fab material-icons" 
            aria-label={props.aria_label} 
            onclick={props.onclick}>
            <span class="mdc-fab__icon">
                {props.icon}
            </span>
        </button>
    );
};

export function MDCIconButton(props) {
    if(props.isDisabled === undefined) props.isDisabled = false;    
    return (
        <button 
            id={props.id}
            class="mdc-button" 
            aria-label={props.aria_label} 
            disabled={props.isDisabled} 
            onclick={props.onclick}
            style={props.style}>
            <i class="material-icons" aria-hidden={true}>
                {props.icon}
            </i>
        </button>
    );
};

export class MDCIconToggle extends Simulant.Component {

    constructor(props = {}) {
        super(props);
        this.states = {};
    };

    render() {
        return (
            <i class="mdc-icon-toggle material-icons" role="button" aria-pressed="false"
                aria-label="Add to favorites" tabindex="0"
                data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'>
                favorite_border
            </i>
        );
    };

    uponRegistrationFunc() {
        
    };

};