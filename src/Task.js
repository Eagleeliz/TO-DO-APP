import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Task({name,done,onToggle,onTrash}){
    return(
        < div className={'task ' + (done?'done': '')}>
        <input type="checkbox"  checked={done} onChange={()=>onToggle(!done)
        }/>
       <span> {name}</span>
        <button className='trash' onClick={onTrash}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      </div>
  
    );
}