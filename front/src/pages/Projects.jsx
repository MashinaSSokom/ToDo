import React, {useEffect, useState} from 'react';
import APIService from "../API/APIService";
import ProjectsList from "../components/projects/ProjectsList";
import Title from "../components/UI/title/Title";
import createProject from "../components/projects/CreateProject";
import CreateProject from "../components/projects/CreateProject";
import SearchProject from "../components/projects/SearchProject";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(async () => {
        const response = await APIService.getAllProjects()
        setProjects([...response.data.results])
    }, [])

    const deleteItem = async (id) => {
        const deleteResponse = await APIService.deleteProjectById(id)
        if (deleteResponse.status === 204) {
            const response = await APIService.getAllProjects()
            setProjects([...response.data.results])
        }
    }
    const searchProject = ({projectName}) => {
        if (projectName) {
            let filteredProjects = projects.filter(project => project.name.toLowerCase().includes(projectName.toLowerCase()))
            setProjects([...filteredProjects])

        }

    }
    return (
        <div className={'projects'}>
            <Title name={'Проекты'}/>
            <SearchProject searchProject={searchProject}/>
            <CreateProject projects={projects} setProjects={setProjects}/>
            <ProjectsList projects={projects} setProjects={setProjects} deleteItem={deleteItem}/>
        </div>
    );
};

export default Projects;