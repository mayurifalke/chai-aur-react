import style from "./Container.module.css"

//here Container is blind it does not know anything about the componentes which are going to render, thus we can use  this container to display any componentes 
function Container(props){
  return(
    <div className={style.container}>
      {props.children}
    </div>
  );
}

export default Container;