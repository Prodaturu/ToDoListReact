"use client";
import { list } from 'postcss';
import React, { useState } from 'react';

function Page(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(title.trim(), '\t', desc.trim());
    setTitle('');
    setDesc('');
  };

  let renderTask = <h2> No task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex items-center justify-between mb-4'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2x1 font-semibold'>{task.title}</h5>
            <h6 className='text-xl font-medium'>{task.desc}</h6>
          </div>
          <button className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
        ToDoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Add a new task'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='text'
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Add Description'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>
          Add
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}

Page.propTypes = {};

export default Page;
