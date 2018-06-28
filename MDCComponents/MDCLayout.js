import { Simulant } from '../SimulantDOM';

export function MDCLayoutGrid(props = {}) {
    return(
        <div 
            class={`mdc-layout-grid ${props.class}`}
            style={`${props.style}`}>
            {props.children}
        </div>
    );
};

export function MDCGridInner(props = {}) {
    return(
        <div 
            class={`mdc-layout-grid__inner ${props.class}`} 
            style={`${props.style}`}>
            {props.children}
        </div>
    );
};

export function MDCGridCell(props = {}) {
    if(props.children == undefined) props.children = '';
    return(
        <div 
            class={`mdc-layout-grid__cell mdc-layout-grid__cell--span-${props.span} ${props.class}`}
            style={props.style}>
            {props.children}
        </div>
    );
};