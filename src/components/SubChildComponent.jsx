 import React  , {useContext} from 'react';
 import { UserContext } from '../context/userContext';

 
 const SubChildComponent = () =>{
  const {userInfo , userLogin} = useContext(UserContext);
  console.log(userInfo)
  console.log(userLogin)

    return (
    
      <div>
        {
          userLogin?.status && <h1>{userInfo.name}</h1>
        }

      </div>
    )
  }


  export default SubChildComponent;