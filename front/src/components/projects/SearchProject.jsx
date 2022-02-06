import React, {useState} from 'react';

const SearchProject = ({searchProject, ...props}) => {
    const [project, setProject] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        searchProject({projectName: project})
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder={'Введите название проекта...'} value={project}
                   onChange={(event) => setProject(event.target.value)}/>
            <button type={"submit"}>Найти</button>
        </form>

    );
};

export default SearchProject;