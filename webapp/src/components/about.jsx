export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>¿Quíenes somos?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>¿Qué nos define?</h3>
               <p>Somos el grupo ahora no recuerdo tal tal ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
