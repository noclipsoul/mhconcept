export default function Playout({children}:{
    readonly children: React.ReactNode;
}){
    return(
        <div className=" items-center justify-center mt-20 ">
            {children}
        </div>
    )
}