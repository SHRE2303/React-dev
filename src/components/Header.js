import Button from '../Button'
const Header = ({title}) => {
  return (
    <header className='header'>

        <h1 style={{font:'Monospace'}}> {title} </h1>
        
        <Button color={'black'} text='add' />
    </header>
  )
}

export default Header