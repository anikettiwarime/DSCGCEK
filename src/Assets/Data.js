import { useEffect } from 'react'

const Data = () => {
    const URL = `https://anikettiwarime.github.io/API/team.json`
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            result.json().then(json => {
                console.log(json);
            })
        }
        fetchData();
    }, [])
    
    return (
        <>
        </>
    )
}

export default Data