
const layout = ({children,management,settings}:{children:React.ReactNode,management:React.ReactNode,settings:React.ReactNode}) => {
  return (
    <div>
        <div>Dash default layout</div>
        <div>{children}</div>
        <div>{settings}</div>
        <div>{management}</div>
    </div>
  )
}

export default layout