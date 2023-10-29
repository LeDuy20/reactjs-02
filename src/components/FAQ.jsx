import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'


const FAQ = ({question , answer}) => {

    const [isShowAnswer, setIsShowAnswer] = useState(false);

  return (
    <article className="faq" onClick={() => setIsShowAnswer(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
               {
                isShowAnswer ?  <AiOutlineMinus/> : <AiOutlinePlus/> 
               }
            </button>
        </div>
            {isShowAnswer && <p>{answer}</p>}
    </article>
  )
}

export default FAQ