import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import { addText } from '../redux/textSlice';

function Text() {
  const [ markdown, setMarkdown ] = useState("# Markdown Preview");
  const item = useSelector(state=>state.texts.items)
  const help = useSelector(state => state.texts.help);
  const isClick = useSelector((state) => state.texts.isClick);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addText({markdown:markdown}))
    if(isClick === true) {
      setMarkdown('')
    }
  }, [markdown])

  return (
    <div className="text-panels">
      <textarea  className="text-panel-left"
        value={isClick === true ? help : markdown}
        onChange={(e) => setMarkdown(e.target.value)}>
        this is user input
      </textarea>
      <div className="text-panel-right">
        <ReactMarkdown>{isClick === true ? help : item.markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Text;