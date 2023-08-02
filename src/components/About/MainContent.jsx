import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
    Typography,
    Button,
    Card
} from "@material-tailwind/react";

function MainContent() {

    return (
        <div id="taskHub-info" className='flex flex-col gap-8 p-4 bg-white shadow-md border'>
            <div>
                <Typography className='text-2xl font-semibold'>What is TaskHub?</Typography>
                <Typography className='ml-4'>TaskHub is a task management app that helps you organize your tasks and projects.</Typography>
            </div>

            <div>
                <Typography className='text-2xl font-semibold'>How does it work?</Typography>
                <Typography className='list-disc ml-4'>
                    <li>Sign up for an account</li>
                    <li>Create a space for your project</li>
                    <li>Create tasks to divide your work and organize your project</li>
                    {/* <li>Assign tasks to your team members</li> */}
                    <li>Track the progress of your project</li>
                </Typography>
            </div>

            <div>
                <Typography className='text-2xl font-semibold'>Why you should I use it?</Typography>
                <Typography className='list-disc ml-4'>
                    <li>Free to use</li>
                    <li>Easy to use</li>
                    <li>Open source</li>
                </Typography>
            </div>
        </div>
    )
}

export default MainContent