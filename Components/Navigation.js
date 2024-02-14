import React from 'react'
const Navigation = (props) => {
    return (
    <div className={"flex p-2 bg-green-500"}>
    <div>
                <h4>{props.name}</h4>
            </div>
            <div>
                <h4>About US</h4>
                <h4>Contact</h4>
                <h4>History</h4>
                <h4>Legal Team</h4>
            </div>
        </div>
    )
}
export default Navigation
