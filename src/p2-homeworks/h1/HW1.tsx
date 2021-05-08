import React from 'react'
import Message, {MessageType} from './Message'

const messageData: MessageType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    // avatar: 'https://lh3.googleusercontent.com/proxy/k0ZpjJYyH9gCMIH3-bnl0p_zb5ukAdqoFfMn7T_ZlUpfh9NbsEfHUbkApcKbXwp5vZL2vxGMRP8yn5IIa_YXDCMZXsZ2lOJet3AVR4ilVwPDFPNFimAhXJ3uFSxVQ8j330Ysq4n_xDBGD56qRWciVh939_DfMCtqRrwFcdDjYg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
