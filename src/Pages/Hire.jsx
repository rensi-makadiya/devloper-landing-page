import { HireText } from "../Components/ui/Text"

export const Hire = () =>{
    return(
        <>
        <div className="hire">
            <div className="hire-con">
                <div className="left">
                    <HireText variant="title">Hire the best developers and designers around!</HireText>
                </div>
                <div className="right">
                    <img src="img/hire.png"/>
                </div>
            </div>
        </div>
        </>
    )
}