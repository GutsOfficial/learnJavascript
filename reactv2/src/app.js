
   
    var root = document.getElementById('root');
    // class Header extends React.Component{
    //     render(){
    //         return <h1>Hello React</h1>
    //     }
    // }
    class Header2 extends React.Component{
        render(){
            return <h1>Hello header</h1>
        }
    }
    var template = <>
    <div class="container">
    <h1 id="test">Hello bitches</h1><div> Lorem</div>
    </div>
    
    </>;
    var name2 = "Samsung S10"
    var template2= (
        <div>
        <h1>{name2}</h1>
        <p>Price : 3000TL</p>
        <p>Description : iYİ AL</p>
    </div>
    )
    const Header = function(sa){
        console.log(sa)
        return(
            <div>
                <h1>{sa.title}</h1>
            </div>
        )
    }
    var template3= (<div>
       <Header title="apsssssssssss"/>
        <Header2/>
      

    </div>)
   // var template = React.createElement('h1',null,'hello world')

    ReactDOM.render(template3,root);

