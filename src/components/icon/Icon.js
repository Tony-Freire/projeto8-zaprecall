export default function Icon({status}) {

    if(status=='not_answer'){
    return(
        <ion-icon name="play-outline"></ion-icon>
    )}
    if(status=='correct'){
        return(
            <ion-icon name="checkmark-circle"></ion-icon>
        )}
    if(status=='almost'){
            return(
                <ion-icon name="help-circle" ></ion-icon>
            )}
    if(status=='error')
    {
        return(
            <ion-icon name="close-circle"></ion-icon>
        )
    }

}