const Container = (props) => {
    return <main className="w-[1140px] h-[540px] flex flex-col mx-auto rounded-sm shadow-md bg-white font-sans overflow-hidden [&>.lf-player-container]:flex [&>.lf-player-container]:flex-1 [&>.lf-player-container]:items-center">{props.children}</main>
}
export default Container
//  min-h-[66%], min-w-fit