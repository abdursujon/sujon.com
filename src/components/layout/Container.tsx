import '../../style/container.css'

interface Props {
    children: React.ReactNode // Refer to tsx what kind of children allowed inside Props interface (Props means properties)
}

// Container function utilises container.css classes to create page background container
export function Container({ children } : Props ){
    return (
        <div className="container-bg">
            {children}
        </div>
    )
}