export const Team = (props) => {
  return (
    <div id='team' className='text-center' style={{textAlign: "center", padding: "100px 0"}}>
      <div className='container' style={{paddingRight: "15px", paddingLeft: "15px", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
