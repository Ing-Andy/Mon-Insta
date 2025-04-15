import { Forward, Smile } from 'lucide-react'
import Profile from '../../profile/Profile'
import './PostComment.css'
import React, { useState } from 'react'


export default function PostComment() {
    const [value,setValue] = useState('')
  return (
    <div className='PostComment'>
        <div className="PostCommentContainer">
            <div className="PostCommentImage">

            </div>
            <div className="PostCommentComment">
                <div className="PostCommentCommentProfil">
                    <Profile />
                </div>
                <div className="params">
                    <p>suggetion d'ami</p>
                    <hr width='80%'/>
                </div>
                <ul className='PostCommentCommentListe'>
                    <li><Profile /></li>
                    <li><Profile /></li>
                    <li><Profile /></li>
                    <li><Profile /></li>
                    <li><Profile /></li>
                    <li><Profile /></li>
                    <li><Profile /></li>
                </ul>
                <div className="PostCommentCommentYour">
                    <div> 
                        <Smile style={{margin:'5px'}}/> 
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='votre commentaire'  />
                        <button style={{margin:'5px',backgroundColor:'transparent',border:'none',color:'white'}}><Forward /></button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
