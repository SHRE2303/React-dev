
const button = ({color,text}) => {
  const onClick = () => {
      console.log('Yes')
  }
  return (
    
    <button onClick={onClick} style ={{backgroundColor:color}}
    className='btn'>
    {text}
   </button>
  )
}

export default button