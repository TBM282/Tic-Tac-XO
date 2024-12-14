import { useState } from "react";

export default function Player({name,symbol,isActive,onChangeName}){

    const[isEditing,setIsEditing] = useState(false);
    const[updatedName,setUpdatedName]=useState(name);

    const handleClick=()=>{
        //  setIsEditing(isEditing?false:true);
        //  setIsEditing(!isEditing);

        // we should have to use function instead of using the state directly because react will call that function internally
        //  setIsEditing(!isEditing)  // false to true
        //setIsEditing(!isEditing)  //should be true to false but it wont happen because it will take our initial state value here also

        //  but if we're using like this means it will update the state value then only second method will starts to execute
        // setIsEditing(editing=>!editing)
        // setIsEditing(editing=>!editing)

        setIsEditing(editing=>!editing)

        if(isEditing)
        onChangeName(symbol,updatedName)
    }
    const handleChange=(e)=>{
        setUpdatedName(e.target.value);
    }
return (
    
<li className={isActive?'active':undefined}>
<span className="player">
  {!isEditing ? <span className="player-name">{updatedName}</span>:<input type="text" value={updatedName} onChange={handleChange}></input>}
<span className="player-symbol">{symbol}</span>
</span>
<button onClick={handleClick}>{!isEditing?"Edit":"Save"}</button>
</li>
);

}