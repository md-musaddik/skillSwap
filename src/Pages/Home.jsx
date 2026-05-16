import React from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from '../Components/SkillCard';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1 className='text-4xl text-center mb-7'>Popular Skills</h1>
            <div className='grid grid-cols-3 space-y-5'>
                {
                data.map((skill)=><SkillCard skill={skill}></SkillCard>)
            }
            </div>
            
        </div>
    );
};

export default Home;