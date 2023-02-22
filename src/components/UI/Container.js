const Container = (props) => {
    return <main className=" flex flex-col w-[720px] h-[570px] mx-auto rounded-sm shadow-md bg-white font-sans overflow-hidden [&>.lf-player-container]:flex [&>.lf-player-container]:flex-1 [&>.lf-player-container]:items-center">{props.children}</main>
}
export default Container
//  min-h-[66%], min-w-fit