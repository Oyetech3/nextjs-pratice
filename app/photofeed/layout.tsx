import React from "react";

export default function Layout(props: { 
    modal: React.ReactNode;
    children: React.ReactNode }) {
    return (
        <div>
            {props.modal}
            {props.children} 
        </div>
    );
}