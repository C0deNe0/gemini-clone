import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended,setExtended] = useState(false);
    const {onSent,prevPrompts,setRecentPrompt} =useContext(Context);


  return (
    <div className='Sidebar'>
      <div className="top">
            <img onClick={()=> setExtended(prev => !prev)} className='menu'  src={assets.menu_icon} alt="menu-icon" />
           {extended?  <div className="newchat">
                <img src={assets.plus_icon} alt="plus button" />
                <p>New Chat</p>
            </div>
            :null
            
            }
          {extended ? <div className="recent">
            <div className="recent-title">Recent</div>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="message" /> 
                <p>what is this....</p>
            </div>
            </div>
            
            :null
            }
     

      </div>
<div className="bottom">
<div className="bottom-item recent-entry">
    <img src={assets.question_icon} alt="" />
    {extended?<p>Help</p>:null}
</div>
<div className="bottom-item recent-entry">
    <img src={assets.history_icon} alt="" />
    {extended?<p>activity</p>:null}
</div>
<div className="bottom-item recent-entry">
    <img src={assets.setting_icon} alt="" />
    {extended?<p>settings</p>:null}
</div>


</div>

    </div>
  )
}

export default Sidebar
