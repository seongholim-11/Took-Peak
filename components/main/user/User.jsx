import React from 'react'

export default function User() {
  return (
    <div className='user'>
        <img src="/image/main/user/avatar.png" alt="profil" />
        <div className='userInf'>
            <div className='nickname'>@Nickname</div>
            <div className='email'>123456@gmail.com</div>
        </div>
        <div className='skill'><span>Skill</span><span>Skill</span><span>Skill</span><span>Skill</span></div>
    </div>
  )
}
