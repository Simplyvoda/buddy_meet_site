import React from 'react'
import { useState, useEffect } from "react";
import {UserCard} from './UserCard';
import {Pagination} from './Pagination';


export const Users = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(15);
  const postsPerPage = 15;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=120")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data.results);
      });
  }, []);
  // to check if fetchdata worked
  console.log(userData);

  const userArr = userData.map((user) => {
    return <UserCard key={user.id} user={user} />
  });

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = userArr.slice(firstPostIndex, lastPostIndex);

  return (
    <article className='m-14 flex flex-col justify-center items-center'>
      <h1 className='use-header flex justify-center items-center text-4xl pb-6 mb-12'>Connect with BuddyMeet Users !</h1>
      <div className='user-container grid gap-10 grid-cols-5 grid-rows-2'>
        {currentPosts}
      </div>
      <Pagination 
      totalPosts={userArr.length} 
      postsPerPage={postsPerPage} 
      setCurrentPage={setCurrentPage}/>
    </article>

  )
}

export default Users ;