import React, {useState} from "react";
import {requestApi} from "./hw13Api";
import {Request} from "./components/Request";

export const HW13 = () => {
    const [check, setCheck] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => {
                requestApi.post(check)
                    .then(res => {
                        if (res.status === 200) {
                            setResult(`${res.data.errorText} ${res.data.info}`);
                            setError(false);
                        }
                    })
                    .catch((rej) => {
                        setResult(`${rej.response.data.errorText} ${rej.response.data.info}`);
                        setError(true);
                    });

            }}> кнопка
            </button>
            <input onChange={(e) => {
                setCheck(e.currentTarget.checked);
            }} type={'checkbox'}/>
            {result !== '' ? <Request data={result} error={error}/> : ' тут будет request'}
        </div>
    )
}

