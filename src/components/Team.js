import { useEffect, useState } from 'react'

const Team = () => {
    const URL = "https://anikettiwarime.github.io/API/team.json"
    const [users, setUsers] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            // const result = await fetch(`https://anikettiwarime.github.io/API/team.json`);
            result.json().then(json => {
                setUsers(json.users)
            })
        }
        fetchData();
    }, [])

    console.log(users, "Run");
    return (
        <>
            <div className='container' id='team' >
                <div className="section-heading">
                    GDSC TEAM 2022-23
                </div>
                <div className="d-flex even-space wrap">

                    {users.map((user) => {
                        const { id, name, image, responsibility, social } = user;
                        const { instagram, github, linkedin } = social
                        return (
                            <div className="card" key={id} >
                                <div className="card-header">
                                    <div className="pic">
                                        <img src={image} alt="user card" />
                                    </div>
                                    <div className="name">{name}</div>
                                    <div className="desc">{responsibility}</div>
                                    <div className="sm d-flex">
                                        <a href={linkedin} target="_blank" className="fa-brands fa-linkedin" rel="noreferrer"></a>
                                        <a href={github} target="_blank" className="fa-brands fa-github" rel="noreferrer"></a>
                                        <a href={instagram} target="_blank" className="fa-brands fa-instagram" rel="noreferrer"></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Team