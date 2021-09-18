import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Button = (props) => {
    const className = [props.className];
    if(props.isPrimary) className.push("btn-primary");
    if(props.isBlock) className.push("btn-block");
    if(props.isLarge) className.push("btn-lg");
    if(props.isSmall) className.push("btn-sm");
    if(props.hasShadow) className.push("btn-shadow");

    const onClick = () =>{
        if(props.onClick) props.onClick();
    }

    if(props.isDisabled || props.isLoading) {
        if(props.isDisabled) className.push("disabled");
        return (
            <span className={className.join(" ")}>
                { props.isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                ) : (
                    props.children
                )}
            </span>
        );
    }

    if(props.type === "link"){
        if(props.isExternal){
            return (
                <a href={props.href} className={className.join(" ")} target={props.target === "_blank" ? "noopener noreferrer" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
                    {props.children}
                </a>
            );
        } else {
            return (
            <Link to={props.href} className={className.join(" ")} onClick={onClick}>
                {props.children}
            </Link>
            );
        }
    } 
    return (
    <button className={className.join(" ")} onClick={onClick}>{props.children}</button>
    )   
}

Button.propTypes = {
    type : PropTypes.oneOf(["link","button"]),
    className : PropTypes.string,
    href : PropTypes.string,
    isBlock : PropTypes.bool,
    isPrimary : PropTypes.bool,
    isLoading : PropTypes.bool,
    isDisabled : PropTypes.bool,
    onClick : PropTypes.func,
    isExternal : PropTypes.bool,
    isLarge : PropTypes.bool,
    isSmall : PropTypes.bool,
    hasShadow : PropTypes.bool
}

export default Button;