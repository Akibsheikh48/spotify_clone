import React from 'react';
import './SidebarOptions.css';



function SidebarOptions({title , Icon, largeIcon, largetitle}) {
    return (
        <div className="sidebarOption">
          {Icon && <Icon className="sidebarOption__icon" />}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
          {largeIcon && <largeIcon className="sidebarOption__largeicon" />}
          {largeIcon ? <h2>{largetitle}</h2>: <p>{largetitle}</p>}
        </div>
    )
}

export default SidebarOptions
