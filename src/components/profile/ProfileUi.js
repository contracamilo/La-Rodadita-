
import React from 'react'
import ProfileSummary from './ProfileSummary'


const ProfileUi = ({profiles}) => {
  return (
    
    <div className="project-list section">  
        { profiles && profiles.map(profile => {
          return(  
            <ProfileSummary profile={profile} key={profile.id}/>
          )
        })}
    </div>
          
  )
}

export default ProfileUi