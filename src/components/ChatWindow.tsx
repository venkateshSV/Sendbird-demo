import React from 'react'
interface Channel{
    'name':string,
    'member_count':number,
    'channel_url':string
}


const ChatWindow:React.FC<Channel> = ({name,member_count,channel_url}) => {
  return (
    <div style={{paddingLeft:'32em',marginLeft:'31em',border:'1px solid black',height:'90vh'}}>
        <div>
            <h3>Selected Group: {name}</h3>
        </div>
    </div>
  )
}

export default ChatWindow