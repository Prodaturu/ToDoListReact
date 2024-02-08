"use client";

import { list } from 'postcss';
import React, { useState } from 'react';

// Define the Page component
function Page(props) {
  // Define state variables using the useState hook
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  // Define the submitHandler function
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(title.trim(), '\t', desc.trim());
    setTitle('');
    setDesc('');
  };

  // Initialize the renderTask variable
  let renderTask = <h2 className='text-lg text-lime-600'>Lets organize our tasks</h2>;

  // Define the deleteHandler function
  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  // Check if there are tasks in the mainTask array
  if (mainTask.length > 0) {
    // Map through the mainTask array and render each task
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex items-center justify-between mb-1 mt-1'>
          <div className='flex items-center justify-between w-2/3 mt-2 mb-2'>
            <h5 className='text-2xl font-semibold'>{task.title}</h5>
            <h6 className='text-lg font-medium'>{task.desc}</h6>
          </div>
          <button
            onClick={() => { deleteHandler(index)}}
            className='bg-red-400 text-white px-3 py-1.5 rounded font-bold'>
              Delete
          </button>
        </li>
      );
    });
  }

  
  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className='bg-blue-500 text-white p-5 text-5xl font-bold text-center'>
        ToDoList
      </h1>
      <form onSubmit={submitHandler} className='max-w-md mx-auto bg-white rounded p-5 shadow-md'>
        <input
          type='text'
          className='w-full border-gray-300 border-2 rounded p-2 mb-4'
          placeholder='Add a new task'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='text'
          className='w-full border-gray-300 border-2 rounded p-2 mb-4'
          placeholder='Add Description'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className='w-full bg-blue-500 text-white py-2 text-2xl font-bold rounded'>
          Add
        </button>
      </form>
      <hr className='my-5' />
      <div className='max-w-md mx-auto bg-white rounded p-5 shadow-md'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}
  
// Define the prop types for the Page component
Page.propTypes = {};

// Export the Page component as the default export
export default Page;
