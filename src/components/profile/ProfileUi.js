
import React from 'react'
import ProfileSummary from './ProfileSummary'


const ProfileUi = ({profiles}) => {
  let profs = [];
  profs = (profiles) ? profiles : [' '];
  
  
  return (
    
    <div className="project-list section">  
        { profiles && profs.map(profile => {
          return(  
            <ProfileSummary profile={profile} key={profile.id}/>
          )
        })}
    </div>
          
  )
}

export default ProfileUi