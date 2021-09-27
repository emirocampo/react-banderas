import Flag from "./Flag";

const ContainerFlag = ({data}) =>{
    const arrayFlag = data.map( (e)=> {
        return(
            <Flag url={e.flags[1]} key={e.name}/>
        );
    })
    return(
        <>
            {data && arrayFlag}
        </>
    );
}

export default ContainerFlag;