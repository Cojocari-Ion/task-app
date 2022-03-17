import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar />
      
      <H1>
        search name
      </H1>

      <InputAndButtons>

      <InputContainer>
          
          <Form onSubmit={e => e.preventDefault()} >
              <Input/>
              <IconContainer type='sumbit'>
                  <Link to='list'> 
                  <Icon className='fa-solid fa-magnifying-glass'></Icon>
                  </Link>
              </IconContainer >
  
          </Form>
      
      </InputContainer>

        <ClearButton>
          <Link style={linkStyle} to='/'>
            clear
          </Link>

        </ClearButton>
      
      </InputAndButtons>



      <Routes>
        <Route path="/" element={<EmptyElement />} />
        <Route path="list" element={<NamesList />} />
      </Routes>
    </div>
  )
}

export default Home