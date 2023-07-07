function ItemList (props){
    return(
        <>
       <div 
       style={{
            margin: '50px',
            }
            }
       >
      
              
              <div className="row">
                  <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title"><h3>{props.title}</h3></span>
                        <p>{props.children}</p>
                      </div>
                      <div className="card-action">
                        <a href="#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}


export default ItemList;